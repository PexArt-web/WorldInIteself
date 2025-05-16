const Whisper = require("../Models/BluePrint/WhisperModel");

const authorWrite = async (req, res) => {
  try {
    const { title, category, content, author } = req.body;
    const data = await Whisper.create({ title, category, content, author });
    if (!data) {
      return res
        .status(400)
        .json({ message: "unable to save data , Please try again" });
    }
    res.status(201).json({ message: "Boom! Saved like a boss.", data });
  } catch (error) {
    res.status(400).json({ message: "Error saving data", error });
  }
};

//Getting letter by category

const getLetterByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    if (!category) {
      console.log("No category provided");
      return res
        .status(400)
        .json({ message: "Please provide a category to search" });
    }
    // const data = await Whisper.find({ category: category.toLowerCase() });
    const data = await Whisper.find({
      category: new RegExp(`^${category}$`, "i"), // to ignore case sensitivity in my database
    });
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

module.exports = {
  authorWrite,
  getLetterByCategory,
};

// will get back to this later

// const authorSignUp = async (req, res) =>{
//     try {
//         const { name, email, password } = req.body;
//         const author = await Author.create({ name, email, password });
//         res.status(201).json({ message: "Author created successfully", author });
//     } catch (error) {
//         res.status(500).json({ message: "Error creating author", error });
//     }
// }
