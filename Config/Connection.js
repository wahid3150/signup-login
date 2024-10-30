const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGO_URI;
if (!uri) {
  console.error("MONGO_URI not found in environment variables");
  process.exit(1);
}

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Database is connected successful!");
  } catch (error) {
    console.error("Failed to connect to DB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
