const express = require("express");
const urlRoutes = require("./routes/url");
const URL = require("./models/url");
const router = express.Router();

router.get("/", async(req,res)=>{
    const allurls = await URL.find({})

    return res.render("home",{
        urls: allurls,
    })
})


module.exports = router;
