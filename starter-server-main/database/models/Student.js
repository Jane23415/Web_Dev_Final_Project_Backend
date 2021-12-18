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

  imageURL: {
    type: Sequelize.STRING,
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false
  },

  gpa: {
    type: Sequelize.STRING,
  }

});

module.exports = Student;