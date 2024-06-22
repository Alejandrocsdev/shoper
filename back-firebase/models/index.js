const serviceAccount = require('../serviceAccountKey.json')
const admin = require('firebase-admin')
const credential = admin.credential.cert(serviceAccount)
admin.initializeApp({ credential })

module.exports = { db: admin.firestore() }
