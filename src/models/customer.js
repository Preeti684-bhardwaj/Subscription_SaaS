const { DataTypes, Sequelize } = require("sequelize");
const database = require("../config/db");
const Subscription = require("./subscriptionbought"); // Import Subscription model
const Order = require("./order"); // Import Order model

const Customer = database.define("Customer", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  phone: Sequelize.STRING,
  isActivated: Sequelize.BOOLEAN,
  isEmailVerified: Sequelize.BOOLEAN,
  isPhoneVerified: Sequelize.BOOLEAN,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});


module.exports = Customer;
