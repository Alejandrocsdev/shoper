const functions = require('firebase-functions')

const express = require('express')

const app = express()

const cors = require('cors')

const routes = require('./routes')

app.use(cors())

app.use('/api', routes)

exports.app = functions.https.onRequest(app)
