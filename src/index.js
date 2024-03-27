const express = require("express");
const app = express();
const database = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Error handling for uncaught exceptions
process.on("uncaughtException", (err) => {
  console.error(`Uncaught Exception: ${err.message}`);
  console.error(err.stack);
  console.log(`Shutting down the server due to uncaughtException`);
  process.exit(1);
});

// Syncing database
(async () => {
  try {
    await database.sync({ force: false }); // Set force to false in production
    console.log("Database synced");
  } catch (error) {
    console.error("Database sync error:", error);
  }
})();

// Server setup
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Error handling for unhandled rejections
process.on("unhandledRejection", (err) => {
  console.error(`Unhandled Rejection: ${err.message}`);
  console.error(err.stack);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  server.close(() => {
    process.exit(1);
  });
});
