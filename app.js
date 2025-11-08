const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bugRoutes = require('./routes/bugRoutes')
const { notFound, errorHandler } = require('./middleware/errorHandler')

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.get('/api/health', (req, res) => res.json({ status: 'ok' }))
app.use('/api/bugs', bugRoutes)

app.use(notFound)
app.use(errorHandler)

module.exports = app
