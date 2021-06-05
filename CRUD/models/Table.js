const Sequelize = require('sequelize');

const sequelize = require('../config/connection');

const Table = sequelize.define('tables', {
    name: Sequelize.INTEGER,
    number: Sequelize.INTEGER,
    status: Sequelize.STRING
  }, {
    timestamps: false
});


module.exports = Table;
