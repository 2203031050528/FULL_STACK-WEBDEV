const express = require("express");
const URL = require("./models/url");
const {
  handleGenerateNewShortURL,
  handleRedirect,
  handlegetanalytics,
} = require("../controllers/url");

const router = express.Router();

// Route to generate a new short URL
router.post("/", handleGenerateNewShortURL);

router.get("/analytics/:shortid",handlegetanalytics);

// Route to handle redirection
router.get("/:shortid", handleRedirect);

module.exports = router;















