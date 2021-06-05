const Sequelize = require('sequelize');

const sequelize = require('../config/connection');

const Table = sequelize.define('tables', {
    name: Sequelize.STRING,
    number: Sequelize.INTEGER,
    status: Sequelize.STRING
  }, {
    timestamps: false
});


module.exports = Table;
