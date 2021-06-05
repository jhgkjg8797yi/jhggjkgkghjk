const Sequelize = require("sequelize");

const sequelize = require("./../config/connection");

const Food = sequelize.define(
  "Foods",
  {
    name: Sequelize.STRING,
    price: Sequelize.BIGINT,
    subsidy: Sequelize.STRING,
    subsidy_price: Sequelize.BIGINT,
  },
  {
    timestamps: false,
  }
);

module.exports = Food;
