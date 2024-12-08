const express = require("express");
const { handleUserSignup, handleUserLogin } = require("../controllers/user");
const router = express.Router();

// Render signup page
router.get("/signup", (req, res) => {
  res.render("signup", { error: null }); // Pass `error` as null initially
});

// Render login page
router.get("/login", (req, res) => {
  res.render("login", { error: null }); // Pass `error` as null initially
});

// Handle signup
router.post("/signup", handleUserSignup);

// Handle login
router.post("/login", handleUserLogin);

module.exports = router;
