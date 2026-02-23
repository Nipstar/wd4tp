export const config = { runtime: 'edge' }

export default async function handler(req: Request) {
    if (req.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 })
    }

    const apiKey = process.env.RETELL_API_KEY
    const agentId = process.env.RETELL_AGENT_ID

    if (!apiKey || !agentId) {
        return new Response(JSON.stringify({ error: 'Voice service not configured' }), { status: 500 })
    }

    try {
        const response = await fetch('https://api.retellai.com/v2/create-web-call', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ agent_id: agentId }),
        })

        if (!response.ok) {
            return new Response(JSON.stringify({ error: 'Unable to start voice call. Please try again.' }), { status: 500 })
        }

        const data = await response.json()
        return new Response(JSON.stringify({ access_token: data.access_token }), {
            headers: { 'Content-Type': 'application/json' },
        })
    } catch {
        return new Response(JSON.stringify({ error: 'Service temporarily unavailable' }), { status: 500 })
    }
}
