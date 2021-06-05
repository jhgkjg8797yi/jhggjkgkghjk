const Sequelize = require('sequelize');

const sequelize = require('./../config/connection');


const Payment = sequelize.define('payments', {
    name: Sequelize.STRING,
    phone: Sequelize.STRING,
    student_number: Sequelize.STRING,
    ResCode: Sequelize.INTEGER
  }, {
    timestamps: false
  });


module.exports = Payment;