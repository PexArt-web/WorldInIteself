const express = require("express");
const {
  authorWrite,
} = require("../Controller/authorController");
const router = express.Router();

router.post("/author-write", authorWrite);

module.exports = router;
