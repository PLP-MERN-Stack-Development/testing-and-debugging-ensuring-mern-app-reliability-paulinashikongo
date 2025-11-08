// Week 6 minimal backend: in-memory bug list for testing/debugging

const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5001

app.use(cors())
app.use(express.json())

// In-memory storage (no DB, good for tests/debugging)
let bugs = []
let nextId = 1

// Health
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', ts: new Date().toISOString() })
})

// GET /api/bugs
app.get('/api/bugs', (req, res) => {
  res.json(bugs)
})

// POST /api/bugs
app.post('/api/bugs', (req, res) => {
  console.log('Creating bug with body:', req.body) // debugging
  const { title, description = '', status = 'open', priority = 'medium' } = req.body
  if (!title || !String(title).trim()) {
    return res.status(400).json({ message: 'Title is required' })
  }
  const bug = { id: nextId++, title, description, status, priority }
  bugs.push(bug)
  res.status(201).json(bug)
})

// PUT /api/bugs/:id
app.put('/api/bugs/:id', (req, res) => {
  const id = Number(req.params.id)
  const bug = bugs.find(b => b.id === id)
  if (!bug) return res.status(404).json({ message: 'Bug not found' })
  Object.assign(bug, req.body)
  res.json(bug)
})

// DELETE /api/bugs/:id
app.delete('/api/bugs/:id', (req, res) => {
  const id = Number(req.params.id)
  const prevLen = bugs.length
  bugs = bugs.filter(b => b.id !== id)
  if (bugs.length === prevLen) return res.status(404).json({ message: 'Bug not found' })
  res.json({ message: 'Deleted' })
})

app.listen(PORT, () => {
  console.log(`Bug API server running at http://127.0.0.1:${PORT}`)
})
