const Sequelize = require("sequelize")
const database = require("../database.js")

const Candidate = database.define("candidate", {
  candidateId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  candidateName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  candidateImage: {
    type: Sequelize.STRING
  },
  partyId: {
    type: Sequelize.INTEGER,
    defaultValue: null
  }
})

module.exports = Candidate
