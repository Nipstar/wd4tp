import 'dotenv/config'
import express from 'express'
import compression from 'compression'
import path from 'path'

const app = express()
const PORT = process.env.PORT || 3000

app.use(compression())

// ── Voice Call: Create WebRTC access token ──
app.post('/api/retell-create-call', express.json(), async (_req, res) => {
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
})

// ── Text Chat: Create session + send message ──
app.post('/api/retell-text-chat', express.json(), async (req, res) => {
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
})

// ── Static file serving (must come AFTER API routes) ──
const clientDir = path.resolve(__dirname, '..', 'dist', 'client')

// Serve static assets (JS, CSS, images)
app.use(express.static(clientDir))

// Clean URL fallback: /plumbers -> /plumbers/index.html
app.use((req, res) => {
    const filePath = path.join(clientDir, req.path, 'index.html')
    res.sendFile(filePath, (err) => {
        if (err) {
            res.sendFile(path.join(clientDir, 'index.html'))
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
