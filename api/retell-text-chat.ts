import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    const { message, chat_id } = req.body
    const apiKey = process.env.RETELL_API_KEY
    const textAgentId = process.env.RETELL_TEXT_AGENT_ID

    if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Message is required' })
    }
    if (message.length > 4000) {
        return res.status(400).json({ error: 'Message too long (max 4000 characters)' })
    }
    if (!apiKey || !textAgentId) {
        return res.status(500).json({ error: 'Chat service not configured' })
    }

    try {
        let currentChatId = chat_id

        // Create a new chat session if this is the first message
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
                return res.status(500).json({ error: 'Unable to start chat. Please try again.' })
            }

            const chatData = await createRes.json()
            currentChatId = chatData.chat_id
        }

        // Send message and get response
        const completionRes = await fetch('https://api.retellai.com/create-chat-completion', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ chat_id: currentChatId, content: message }),
        })

        if (!completionRes.ok) {
            return res.status(500).json({ error: 'Unable to send message. Please try again.' })
        }

        const completionData = await completionRes.json()
        const messages = completionData.messages || []
        const agentMessages = messages.filter((m: { role: string }) => m.role === 'agent')
        const latestResponse = agentMessages.length > 0
            ? agentMessages[agentMessages.length - 1].content
            : ''

        res.json({ response: latestResponse, chat_id: currentChatId })
    } catch {
        res.status(500).json({ error: 'Service temporarily unavailable' })
    }
}
