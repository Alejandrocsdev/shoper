const { Router } = require('express')
const router = Router()

const messages = require('./messages')

router.use('/messages', messages)

module.exports = router
