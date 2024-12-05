const express = require('express');
const { handleGenerateNewShortURL } = require('../controllers/url'); // Fixed typo in function name

const router = express.Router();

router.post('/', handleGenerateNewShortURL); // Handle POST request to generate short URL

module.exports = router;
