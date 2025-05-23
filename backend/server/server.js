require("dotenv").config();
const express = require("express");
const { connectDB } = require("../config/database");
const app = express();
const cors = require("cors");
const port = process.env.PORT;
const authorRoute = require("../Routes/AuthorRoute");
const lettersRoute = require("../Routes/lettersRoute");
app.use(express.json());
app.use(cors());

const { log } = console;

app.use("/api", authorRoute);
app.use("/api", lettersRoute);
app.use((req, res) => {
  res.status(404).json({ message: "Requested Route not found" });
});
connectDB((err) => {
  if (err) {
    log("Database connection failed:", err);
  } else {
    app.listen(port, () => {
      log(`Server is running on port ${port}`);
    });
    log("Database connected successfully");
  }
});
