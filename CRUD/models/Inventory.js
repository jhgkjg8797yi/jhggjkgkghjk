const Sequelize = require('sequelize');

const sequelize = require('./../config/connection');


const Inventory = sequelize.define('Inventorys', {
    name: Sequelize.STRING,
    price: Sequelize.BIGINT
  }, {
    timestamps: false
  });


module.exports = Inventory;