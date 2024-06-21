require('dotenv').config()

const express = require('express')

const app = express()

const port = process.env.PORT || 3000

const cors = require('cors')

const routes = require('./routes')

app.use(cors())

app.use('/api', routes)

app.get('/', (req, res) => res.json({ message: 'MySQL Success' }))

app.listen(port, () => console.info(`Server running on port: ${port}`))