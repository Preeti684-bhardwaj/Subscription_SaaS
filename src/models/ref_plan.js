const { DataTypes, Sequelize } = require("sequelize"); // Import Sequelize
const database = require("../config/db");

const ref_plan = database.define("ref_plan", {
  id: {
    type: Sequelize.UUID, // Use Sequelize.UUID here
    defaultValue: Sequelize.UUIDV4, // Use Sequelize.UUIDV4 here
    allowNull: false,
    primaryKey: true,
  },
  plan_name: {
    type: DataTypes.STRING, // Use DataTypes.DATEONLY if you want to store only the date
    allowNull: false,
  },
  monthly_price_per_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  annual_price_per_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

module.exports = ref_plan;
