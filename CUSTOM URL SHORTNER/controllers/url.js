const URL = require('../models/url'); // Fixed case sensitivity
const shortid = require('shortid');

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    
    if (!body.url) {
        return res.status(404).json({ error: `URL is required` });
    }

    const shortId = shortid.generate(); // Generate a unique short ID

    await URL.create({
        shortid: shortId,
        redirectUrl: body.url, // Fixed camelCase
        visitHistory: []
    });

    return res.json({ id: shortId }); // Fixed `res`
}

module.exports = {
    handleGenerateNewShortURL, // Fixed typo in function name
};
