import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    const apiKey = process.env.RETELL_API_KEY
    const agentId = process.env.RETELL_AGENT_ID

    if (!apiKey || !agentId) {
        return res.status(500).json({ error: 'Voice service not configured' })
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
            return res.status(500).json({ error: 'Unable to start voice call. Please try again.' })
        }

        const data = await response.json()
        res.json({ access_token: data.access_token })
    } catch {
        res.status(500).json({ error: 'Service temporarily unavailable' })
    }
}
