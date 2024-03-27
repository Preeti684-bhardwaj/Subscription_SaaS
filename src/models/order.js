const { Sequelize } = require("sequelize");
const database = require("../config/db");
const Customer = require("./customer"); // Import Customer model

const Order = database.define('Order', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    date: Sequelize.DATE,
    invoiceNumber: Sequelize.STRING,
    subscription: Sequelize.JSON,
    payment: Sequelize.JSON,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
});

// Define associations
Order.hasMany(Customer, { foreignKey: 'customerId' });

module.exports = Order;
