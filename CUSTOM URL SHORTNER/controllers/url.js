const shortid = require("shortid");
const URL = require("../models/url");

// Generate a new short URL
async function handleGenerateNewShortURL(req, res) {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  try {
    const shortId = shortid.generate();
    const newUrl = await URL.create({
      shortid: shortId,
      redirectUrl: url,
      visitHistory: [],
    });

    res.status(201).json({ shortid: newUrl.shortid });
  } catch (error) {
    console.error("Error generating short URL:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Redirect to the original URL
async function handleRedirect(req, res) {
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
}


async function handlegetanalytics(req, res) {
    const shortid = req.params.shortid
    const result = await URL.findOne({shortid});
    return res.json({
        totalClicks:result.visitHistory.length,
        analytics:result.visitHistory,
    })
}

module.exports = {
  handleGenerateNewShortURL,
  handleRedirect,
  handlegetanalytics
};
