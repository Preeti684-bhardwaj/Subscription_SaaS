const { DataTypes, Sequelize } = require("sequelize"); // Import Sequelize
const database = require("../config/db");
const subscription = require("./subscription");

const revenue_schedule = database.define("revenue_schedule", {
  id: {
    type: Sequelize.UUID, // Use Sequelize.UUID here
    defaultValue: Sequelize.UUIDV4, // Use Sequelize.UUIDV4 here
    allowNull: false,
    primaryKey: true,
  },
  month: {
    type: DataTypes.DATEONLY, // Use DataTypes.DATEONLY if you want to store only the date
    allowNull: false,
  },
  revenue: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  is_new: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  is_churn: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  // Define foreign key field for the association
  subscription_id: {
    type: Sequelize.UUID, // Use Sequelize.UUID here to match the UUID data type in the associated table
    allowNull: false,
  },
});

// Define association
revenue_schedule.belongsTo(subscription, {
  foreignKey: "subscription_id",
});

module.exports = revenue_schedule;
