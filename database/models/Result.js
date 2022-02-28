const { DECIMAL } = require('sequelize');
const Sequelize = require('sequelize');
const db = require('../db');

const Result = db.define("result", {

  title: {
    type: Sequelize.STRING,
    allowNull: false
  },

  resultUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
    allowNull: false
  }

});

module.exports = Result;