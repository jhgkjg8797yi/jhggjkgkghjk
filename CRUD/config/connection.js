const Sequelize = require("sequelize");

const sequelize = new Sequelize("sqlite:RMS.db");

module.exports = sequelize;
