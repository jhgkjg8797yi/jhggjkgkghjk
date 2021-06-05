const Sequelize = require('sequelize');

const sequelize = require('../config/connection');

const Order = sequelize.define('Orders', {
    name: Sequelize.STRING,
    date: Sequelize.STRING,
    time:Sequelize.STRING,
    table: Sequelize.INTEGER
  }, {
    timestamps: false
});


module.exports = Order;
