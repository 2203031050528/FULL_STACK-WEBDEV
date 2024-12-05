const express = require('express')

const {handleGenrateNewShortURL} = require('../controllers/url')
const router = express.Router();

router.post("/",handleGenrateNewShortURL)

module.exports = router;