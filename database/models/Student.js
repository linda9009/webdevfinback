const { DECIMAL } = require('sequelize');
const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "imgs/defaultperson.jpg",
  },

  gpa: {
    type: Sequelize.DECIMAL(2,1),
  }

});

module.exports = Student;