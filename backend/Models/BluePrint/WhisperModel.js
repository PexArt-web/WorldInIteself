const mongoose = require('mongoose');
const whisperSchema = require('../Schema/Whisper');
const Whisper = mongoose.model("worldInItSelf", whisperSchema)

module.exports = Whisper; 