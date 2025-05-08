const Whisper = require("../Models/BluePrint/WhisperModel");

const authorWrite = async (req, res) => {
    try {
        const {title, category, content, author} = req.body;
        const data = await Whisper.create({title, category, content, author});
        if (!data) {
            return res.status(400).json({ message: "unable to save data , Please try again" });
        }
        res.status(201).json({ message: "data saved successfully", data });
        
    } catch (error) {
        res.status(400).json({ message: "Error saving data", error });
        
    }
}

module.exports = {
    authorWrite
}


// const authorSignUp = async (req, res) =>{
//     try {
//         const { name, email, password } = req.body;
//         const author = await Author.create({ name, email, password });
//         res.status(201).json({ message: "Author created successfully", author });
//     } catch (error) {
//         res.status(500).json({ message: "Error creating author", error });
//     }
// }



