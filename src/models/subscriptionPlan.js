const { DataTypes, Sequelize } = require("sequelize");
const database = require("../config/db");
const Order = require("./order");
const Product = require("./product");

  const SubscriptionPlan =database.define('Subscription_Plan', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    frequency: Sequelize.ENUM('monthly', 'quarterly', 'half-yearly', 'annually'),
    price: Sequelize.DOUBLE,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  });
  

// Define associations
SubscriptionPlan.belongsTo(Product, {
  foreignKey: "Product_id",
});

SubscriptionPlan.belongsTo(Order, {
  foreignKey: "Order_id",
});

module.exports = SubscriptionPlan;
