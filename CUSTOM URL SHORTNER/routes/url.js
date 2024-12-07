const express = require("express");
const {
  handleGenerateNewShortURL,
  handleRedirect,
  handlegetanalytics,
} = require("../controllers/url");

const router = express.Router();

// Route to generate a new short URL
router.post("/", handleGenerateNewShortURL);

// Route to handle redirection
router.get("/:shortid", handleRedirect);

// Route for analytics
router.get("/analytics/:shortid", handlegetanalytics);

module.exports = router;
