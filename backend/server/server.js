require("dotenv").config();
const express = require("express");
const { connectDB } = require("../config/database");
const app = express();
const cors = require("cors");
const port = process.env.PORT;
const authorRoute = require("../Routes/AuthorRoute");
app.use(express.json());
app.use(cors());

app.use("/api", authorRoute);
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});
connectDB((err) => {
  if (err) {
    console.log("Database connection failed:", err);
  } else {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
    console.log("Database connected successfully");
  }
});
