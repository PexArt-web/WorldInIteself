const mongoose = require('mongoose');
const dbUrl = process.env.DBURL

module.exports = {
    connectDB: async (cb) =>{
        try {
            await mongoose.connect(dbUrl);
            console.log('MongoDB connected successfully');
           return cb()
        } catch (error) {
            console.log('MongoDB connection error:', error);
           return cb(error)
        }
    }
}