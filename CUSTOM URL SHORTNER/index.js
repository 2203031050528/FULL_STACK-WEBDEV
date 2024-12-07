const express = require("express");
const { connectMongodb } = require("./connect");
const urlRoutes = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const path = require("path");
const userRoute = require("./routes/user");



const app = express();
const PORT = 8000;

// Connect to MongoDB
connectMongodb("mongodb://127.0.0.1:27017/shorturl").then(() => {
  console.log("Connected to MongoDB");
});

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/url", urlRoutes);
app.use("/user",userRoute)
app.use("/", staticRoute);

// Fallback route for unknown paths
app.use((req, res) => {
  res.status(404).send("Route not found");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
