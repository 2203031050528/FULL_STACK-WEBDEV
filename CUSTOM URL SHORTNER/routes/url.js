const URL = require("../models/url");
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



// Render home page with all URLs
router.get("/", async (req, res) => {
  const allUrls = await URL.find({});
  res.render("home", { urls: allUrls });
});

module.exports = router;

