const { Sequelize } = require("sequelize");
const database = require("../config/db");
const Customer = require("./customer");

const Subscription = database.define("Subscription", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  frequency: Sequelize.ENUM("monthly", "quarterly", "half-yearly", "annually"),
  price: Sequelize.DOUBLE,
  startDate: Sequelize.DATEONLY,
  endDate: Sequelize.DATEONLY,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

Subscription.hasMany(Customer, { foreignKey: 'customerId' });


module.exports = Subscription;
