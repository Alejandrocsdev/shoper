const serviceAccount = require('./serviceAccountKey.json')

const admin = require('firebase-admin')

const functions = require('firebase-functions')

const express = require('express')

const app = express()

const cors = require('cors')

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) })

app.use(cors())

app.get('/', (req, res) => res.json({ message: 'Firebase Success' }))

exports.app = functions.https.onRequest(app)
