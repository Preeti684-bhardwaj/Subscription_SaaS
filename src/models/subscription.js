const { DataTypes, Sequelize } = require("sequelize");
const database = require("../config/db");
const customer = require("./customer");
const ref_plan = require("./ref_plan");
const payment_method = require("./payment_method");

const subscription = database.define("subscription", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  billing_cycle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  first_start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  latest_cycle_start: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  latest_cycle_end: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  // Define foreign key fields for associations
  customer_id: {
    type: Sequelize.UUID, // Use Sequelize.UUID here to match the UUID data type in the associated table
    allowNull: false,
  },
  plan_id: {
    type: Sequelize.UUID, // Use Sequelize.UUID here
    allowNull: false,
  },
  payment_method_id: {
    type: Sequelize.UUID, // Use Sequelize.UUID here
    allowNull: false,
  },
});

// Define associations
subscription.belongsTo(customer, {
  foreignKey: "customer_id",
});
subscription.belongsTo(ref_plan, {
  foreignKey: "plan_id",
});
subscription.belongsTo(payment_method, {
  foreignKey: "payment_method_id",
});

module.exports = subscription;
