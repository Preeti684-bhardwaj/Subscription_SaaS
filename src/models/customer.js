const { DataTypes, Sequelize } = require("sequelize"); // Import Sequelize
const database = require("../config/db");

const customer = database.define("customer", {
  id: {
    type: Sequelize.UUID, // Use Sequelize.UUID here
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.STRING(64),
    validate: {
      notEmpty: {
        args: true,
        msg: "First name must not be empty",
      },
    },
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(64),
    validate: {
      notEmpty: {
        args: true,
        msg: "Last name must not be empty",
      },
    },
    allowNull: false,
  },
  user_name: {
    type: DataTypes.STRING(64),
    validate: {
      notEmpty: {
        args: true,
        msg: "User name must not be empty",
      },
    },
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(255),
    validate: {
      notEmpty: {
        args: true,
        msg: "Password must not be empty",
      },
    },
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(128),
    validate: {
      notEmpty: {
        args: true,
        msg: "Email must not be empty",
      },
    },
    allowNull: false,
  },
  confirmation_code: {
    type: DataTypes.TEXT,
    validate: {
      notEmpty: {
        args: true,
        msg: "Confirmation code must not be empty",
      },
    },
    allowNull: false,
  },
  confirmation_time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  insert_ts: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = customer;
