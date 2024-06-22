const { db } = require('../models')

class MessagesController {
  getMessages = async (req, res, next) => {
    const messagesCollection = db.collection('messages')
    const messagesResponse = []
    const snapshot = await messagesCollection.get()
    snapshot.forEach((doc) => {
      const messageData = doc.data()
      messagesResponse.push({ message: messageData.message })
    })
    res.status(200).json({ data: messagesResponse })
  }

  getMessage = async (req, res, next) => {
    const messageId = req.params.messageId
    const messageDoc = db.collection('messages').doc(messageId)
    const messageDetails = await messageDoc.get()
    const messageData = messageDetails.data()
    res.status(200).json({ data: messageData })
  }

  postMessage = async (req, res, next) => {
    const messageId = Date.now().toString()
    await db.collection('messages').doc(messageId).set({
      id: messageId,
      message: req.body.message
    })
    res.status(200).json({ message: 'Data created successfully.' })
  }
}

module.exports = new MessagesController()
