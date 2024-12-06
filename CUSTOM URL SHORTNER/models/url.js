const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortid: { type: String, required: true, unique: true },
    redirectUrl: { type: String, required: true },
    visitHistory: [{ timestamp: { type: Date, default: Date.now } }],
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

const URL = mongoose.model("URL", urlSchema);

module.exports = URL;
