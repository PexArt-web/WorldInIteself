const express = require("express");
const {
  authorWrite,
  getLetterByCategory,
} = require("../Controller/authorController");
const router = express.Router();

router.post("/author-write", authorWrite);

router.get("/get-letter-by-category/:category", getLetterByCategory);

module.exports = router;
