const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfuly.');
    }
    catch (error) {
        console.log('Error while conecting to MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;