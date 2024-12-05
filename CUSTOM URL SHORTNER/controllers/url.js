const {nanoid} = require('nanoid');
const url = require('../models/url');
async function handleGenrateNewShortURL(req,res){
    const body = req.body;
    if (!body.url) return res.status(404).json({error:`url is required`})
    const shortid = nanoid(8);

    await URL.createObjectURL({
        shortid: shortid,
        redirecturl:body.url,
        visitHistory:[]

    });

    return response.json ({id: shortid})

}

module.exports = {
    handleGenrateNewShortURL,
}