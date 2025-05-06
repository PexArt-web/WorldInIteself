require("dotenv").config();
const express = require("express");
const { connectDB } = require("../config/database");
const app = express();
const port = process.env.PORT;

connectDB((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    process.exit(1); 
  } else {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
    console.log("Database connected successfully");
  }
});
