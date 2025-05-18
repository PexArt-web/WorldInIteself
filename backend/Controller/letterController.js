const Whisper = require("../Models/BluePrint/WhisperModel");

// Getting all letters

const getAllLetters = async (req, res) => {
  try {
    const data = await Whisper.find({});
    if (!data) {
      return res
        .status(404)
        .json({ message: "No data found for this category" });
    }
    console.log(data);
    res.status(200).json({ message: "Data fetched successfully", data: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching data", error });
  }
};

//getting letters by category

const goodMorning = async (req, res) => {
  try {
    const data = await Whisper.find({ category: "Good Morning" }).sort({
      createdAt: -1,
    });
    if (!data) {
      return res
        .status(404)
        .json({ message: "No data found for this category" });
    }
    return res
      .status(200)
      .json({ message: "Data fetched successfully", data: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching data", error });
  }
};

const goodNight = async (req, res) => {
  try {
    const data = await Whisper.find({ category: "Good Night" }).sort({
      createdAt: -1,
    });
    if (!data) {
      return res
        .status(404)
        .json({ message: "No data found for this category" });
    }
    return res
      .status(200)
      .json({ message: "Data fetched successfully", data: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching data", error });
  }
};

const loveLetters = async (req, res) => {
  try {
    const data = await Whisper.find({ category: "Love Letters" }).sort({
      createdAt: -1,
    });
    if (!data) {
      return res
        .status(404)
        .json({ message: "No data found for this category" });
    }
    return res
      .status(200)
      .json({ message: "Data fetched successfully", data: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching data", error });
  }
};

const motherHood = async (req, res) => {
  try {
    const data = await Whisper.find({ category: "Motherhood" }).sort({
      createdAt: -1,
    });
    if (!data) {
      return res
        .status(404)
        .json({ message: "No data found for this category" });
    }
    return res
      .status(200)
      .json({ message: "Data fetched successfully", data: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching data", error });
  }
};

const fatherHood = async (req, res) => {
  try {
    const data = await Whisper.find({ category: "Fatherhood" }).sort({
      createdAt: -1,
    });
    if (!data) {
      return res
        .status(404)
        .json({ message: "No data found for this category" });
    }
    return res
      .status(200)
      .json({ message: "Data fetched successfully", data: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching data", error });
  }
};

const motivation = async (req, res) => {
  try {
    const data = await Whisper.find({ category: "Motivation" }).sort({
      createdAt: -1,
    });
    if (!data) {
      return res
        .status(404)
        .json({ message: "No data found for this category" });
    }
    return res
      .status(200)
      .json({ message: "Data fetched successfully", data: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching data", error });
  }
};

const poems = async (req, res) => {
  try {
    const data = await Whisper.find({ category: "Poems" }).sort({
      createdAt: -1,
    });
    if (!data) {
      return res
        .status(404)
        .json({ message: "No data found for this category" });
    }
    return res
      .status(200)
      .json({ message: "Data fetched successfully", data: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching data", error });
  }
};

const birthday = async (req, res) => {
  try {
    const data = await Whisper.find({ category: "Birthday" }).sort({
      createdAt: -1,
    });
    if (!data) {
      return res
        .status(404)
        .json({ message: "No data found for this category" });
    }
    return res
      .status(200)
      .json({ message: "Data fetched successfully", data: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching data", error });
  }
};

module.exports = {
  goodMorning,
  goodNight,
  getAllLetters,
  loveLetters,
  motherHood,
  fatherHood,
  motivation,
  poems,
  birthday,
};
