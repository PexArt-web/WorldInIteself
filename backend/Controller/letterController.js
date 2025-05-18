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
    const data = await Whisper.find({ category: "Good Morning" });
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
    const data = await Whisper.find({ category: "Good Night" });
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
    const data = await Whisper.find({ category: "Love Letters" });
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
    const data = await Whisper.find({ category: "Motherhood" });
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
    const data = await Whisper.find({ category: "Fatherhood" });
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
    const data = await Whisper.find({ category: "Motivation" });
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
    const data = await Whisper.find({ category: "Poems" });
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
    const data = await Whisper.find({ category: "Birthday" });
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
  birthday
};
