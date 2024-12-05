const express = require("express");
const shortid = require("shortid");
const URL = require("./models/url");
const app = express();
const PORT = 8000;
const { connectMongodb } = require("./connect");

const urlroute = require("./routes/url");

connectMongodb("mongodb://127.0.0.1:27017/shorturl").then(() => {
  console.log("Connected to MongoDB");
});
app.use(express.json());
app.use("/url", urlroute);

app.get("/:shortid", async(req, res) => {
  const shortid = req.params.shortid;
  const entry = await URL.findOneAndUpdate({
    shortid
  },{
    $push:{
        visitHistory:{
            timestamp:Date.now()
        }
    }
  });

  res.redirect(entry.redirectUrl);

 });

app.listen(PORT, () => {
  console.log(`Server listening on port :${PORT}`);
});
