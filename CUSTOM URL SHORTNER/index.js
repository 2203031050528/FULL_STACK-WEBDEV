const express = require("express");
const { connectMongodb } = require("./connect");
const urlRoutes = require("./routes/url");
const path  = require('path');
const URL = require("./models/url");
const staticRoute = require("./routes/staticRouter");


const app = express();
const PORT = 8000;

// Connect to MongoDB
connectMongodb("mongodb://127.0.0.1:27017/shorturl").then(() => {
  console.log("Connected to MongoDB");
});


app.set("view engine", "ejs");
app.set("views",path.resolve("./views"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get("/test", async(req, res) => {
  const allurl = await URL.find()
  return res.render('home')

})

// Routes
app.use("/url", urlRoutes);
app.use("/",staticRoute);

// Fallback route for unknown paths
app.use((req, res) => {
  res.status(404).send("Route not found");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
