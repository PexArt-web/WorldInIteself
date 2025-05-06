const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const whisperSchema = new Schema(
    {
       title:{
            type: String,
            required: false,
        },
        category:{
            type: String,
            required: true,
        },
        content:{
            type: String,
            required: true,
        },
       
    }
)

module.exports = whisperSchema; 