const { DataTypes, Sequelize } = require("sequelize");
const database = require("../config/db");

const payment_method = database.define("payment_method", {
  id: {
    type: Sequelize.UUID, // Use Sequelize.UUID here
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  payment_method: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = payment_method;
