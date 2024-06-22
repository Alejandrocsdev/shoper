const { Router } = require('express')
const router = Router()

const { messagesController } = require('../controllers')

router.route('/')
  .get(messagesController.getMessages)
  .post(messagesController.postMessage)

router.route('/:messageId')
  .get(messagesController.getMessage)

module.exports = router
