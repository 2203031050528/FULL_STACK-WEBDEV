const express = require('express');
const app = express();
const mongoose = require('mongoose');
const data = require('./data.json');
const PORT = 3000;


mongoose.connect('mongodb://127.0.0.1:27017/myfirstdata')
const user = mongoose.model("User",userSchema);
// Middleware
app.use(express.json()); // Parse JSON request body
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request body


// schema




// Routes


// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
