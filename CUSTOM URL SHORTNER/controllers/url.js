const shortid = require("shortid");
const URL = require("../models/url");

// Generate a new short URL
const handleGenerateNewShortURL = async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  try {
    const shortId = shortid.generate();
    await URL.create({
      shortid: shortId,
      redirectUrl: url,
      visitHistory: [],
    });

    res.render("home", { id: shortId });
  } catch (error) {
    console.error("Error generating short URL:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Redirect to the original URL
const handleRedirect = async (req, res) => {
  const { shortid } = req.params;

  try {
    const entry = await URL.findOneAndUpdate(
      { shortid },
      { $push: { visitHistory: { timestamp: Date.now() } } },
      { new: true }
    );

    if (!entry) {
      return res.status(404).send("Short URL not found");
    }

    res.redirect(entry.redirectUrl);
  } catch (error) {
    console.error("Error handling redirect:", error.message);
    res.status(500).send("Internal server error");
  }
};

// Get analytics
const handlegetanalytics = async (req, res) => {
  const { shortid } = req.params;

  try {
    const result = await URL.findOne({ shortid });

    if (!result) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    res.json({
      totalClicks: result.visitHistory.length,
      analytics: result.visitHistory,
    });
  } catch (error) {
    console.error("Error fetching analytics:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  handleGenerateNewShortURL,
  handleRedirect,
  handlegetanalytics,
};
