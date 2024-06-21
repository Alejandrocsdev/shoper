'use strict'

/** @type {import('sequelize-cli').Migration} */

const data = []

data.push({ username: 'root' })
data.push({ username: 'user1' })

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', data)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null)
  }
}
