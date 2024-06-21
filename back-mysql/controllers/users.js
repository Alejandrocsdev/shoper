const { User } = require('../models')

class UsersController {
  getUsers = async (req, res, next) => {
    const users = await User.findAll()
    res.status(200).json(users)
  }
}

module.exports = new UsersController()
