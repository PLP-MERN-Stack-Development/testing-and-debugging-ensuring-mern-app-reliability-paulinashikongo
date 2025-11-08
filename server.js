// server/src/server.js
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
const PORT = process.env.PORT || 5001

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

// Simple in-memory bugs API (optional, but fine to keep)
let bugs = []
let nextId = 1

app.get('/api/bugs', (req, res) => {
  res.json(bugs)
})

app.post('/api/bugs', (req, res) => {
  const { title, description = '' } = req.body
  if (!title || !title.trim()) {
    return res.status(400).json({ message: 'Title is required' })
  }
  const bug = { id: nextId++, title, description, status: 'open', priority: 'medium' }
  bugs.push(bug)
  res.status(201).json(bug)
})

app.use((err, req, res, next) => {
  console.error('Server error:', err)
  res.status(500).json({ message: 'Server error' })
})

app.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`)
})

