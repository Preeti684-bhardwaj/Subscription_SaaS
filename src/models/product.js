const { Sequelize } = require("sequelize");
const database = require("../config/db");
const SubscriptionPlan = require("./subscriptionPlan"); // Import SubscriptionPlan model

const Product = database.define('Product', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    media: Sequelize.JSON,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
});

// Define associations
Product.hasMany(SubscriptionPlan, { foreignKey: 'productId' });

module.exports = Product;
