require('dotenv').config()

const express = require('express')

const app = express()

const port = Number(process.env.PORT) || 3000

const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => res.json({ message: 'MySQL Success' }))

app.listen(port, () => console.info(`Server running on port: ${port}`))