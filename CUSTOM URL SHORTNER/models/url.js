const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortid: {
        type: String,
        required: true,
        unique: true
    },
    redirectUrl: { // Renamed for camelCase consistency
        type: String,
        required: true
    },
    visitHistory: [
        {
            timestamp: { type: Number }
        }
    ]
}, { timestamps: true }); // Add timestamps option

const URL = mongoose.model('URL', urlSchema); // Capitalized model name

module.exports = URL;
