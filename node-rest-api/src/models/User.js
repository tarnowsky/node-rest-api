const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlenght: 2,
        maxlenght: 50,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minlenght: 2,
        maxlenght: 50,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    age: {
        type: Number,
        min: 18,
        max: 120,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
