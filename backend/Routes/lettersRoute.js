const express = require("express");
const {
  goodMorning,
  goodNight,
  getAllLetters,
  loveLetters,
  motherHood,
  fatherHood,
  motivation,
  poems,
  birthday,
} = require("../Controller/letterController");
const router = express.Router();

router.get("/all-letters", getAllLetters);

router.get("/good-morning", goodMorning);

router.get("/good-night", goodNight);

router.get("/love-letters", loveLetters);

router.get("/mother-hood", motherHood);

router.get("/father-hood", fatherHood)

router.get("/motivation", motivation)

router.get("/poems", poems)

router.get("/birthday", birthday)

module.exports = router;
