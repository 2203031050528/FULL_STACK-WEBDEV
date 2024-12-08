const express = require("express");
const { connectMongodb } = require("./connect");
const urlRoutes = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const userRoute = require("./routes/user");
const path = require("path");
const cookieParser = require("cookie-parser");
const {restrictToLoggeninUserOnly} = require('./middleware/auth')

const app = express();
const PORT = 8000;

// Connect to MongoDB
connectMongodb("mongodb://127.0.0.1:27017/shorturl")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/url",restrictToLoggeninUserOnly, urlRoutes);
app.use("/user", userRoute); // Use /user for user-related routes
app.use("/", staticRoute);

// Fallback route for unknown paths
app.use((req, res) => {
  res.status(404).send("Route not found");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
