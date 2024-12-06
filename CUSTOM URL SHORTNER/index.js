const express = require("express");
const { connectMongodb } = require("./connect");
const urlRoutes = require("./routes/url");

const app = express();
const PORT = 8000;

// Connect to MongoDB
connectMongodb("mongodb://127.0.0.1:27017/shorturl").then(() => {
  console.log("Connected to MongoDB");
});


app.set("view engine", "ejs");
// Middleware
app.use(express.json());

// Routes
app.use("/url", urlRoutes);

// Fallback route for unknown paths
app.use((req, res) => {
  res.status(404).send("Route not found");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
