const { Router } = require('express')
const router = Router()

const { usersController } = require('../controllers')

router.route('/').get(usersController.getUsers)

module.exports = router
