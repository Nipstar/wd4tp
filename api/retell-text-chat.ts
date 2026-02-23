export const config = { runtime: 'edge' }

export default async function handler(req: Request) {
    if (req.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 })
    }

    const body = await req.json()
    const { message, chat_id } = body
    const apiKey = process.env.RETELL_API_KEY
    const textAgentId = process.env.RETELL_TEXT_AGENT_ID

    if (!message || typeof message !== 'string') {
        return new Response(JSON.stringify({ error: 'Message is required' }), { status: 400 })
    }
    if (message.length > 4000) {
        return new Response(JSON.stringify({ error: 'Message too long (max 4000 characters)' }), { status: 400 })
    }
    if (!apiKey || !textAgentId) {
        return new Response(JSON.stringify({ error: 'Chat service not configured' }), { status: 500 })
    }

    try {
        let currentChatId = chat_id

        if (!currentChatId) {
            const createRes = await fetch('https://api.retellai.com/create-chat', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ agent_id: textAgentId }),
            })

            if (!createRes.ok) {
                return new Response(JSON.stringify({ error: 'Unable to start chat. Please try again.' }), { status: 500 })
            }

            const chatData = await createRes.json()
            currentChatId = chatData.chat_id
        }

        const completionRes = await fetch('https://api.retellai.com/create-chat-completion', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ chat_id: currentChatId, content: message }),
        })

        if (!completionRes.ok) {
            return new Response(JSON.stringify({ error: 'Unable to send message. Please try again.' }), { status: 500 })
        }

        const completionData = await completionRes.json()
        const messages = completionData.messages || []
        const agentMessages = messages.filter((m: { role: string }) => m.role === 'agent')
        const latestResponse = agentMessages.length > 0
            ? agentMessages[agentMessages.length - 1].content
            : ''

        return new Response(JSON.stringify({ response: latestResponse, chat_id: currentChatId }), {
            headers: { 'Content-Type': 'application/json' },
        })
    } catch {
        return new Response(JSON.stringify({ error: 'Service temporarily unavailable' }), { status: 500 })
    }
}
