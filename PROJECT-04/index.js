const express = require("express");

const users = require("./MOCK_DATA.json");
const fs = require("fs");

const mongoose = require("mongoose");

const PORT = 8000;

const userrouter = require('./routes/user')

mongoose.connect("mongodb://127.0.0.1:27017/mydatabase").then(()=>
  console.log("Connected to MongoDB")).catch((err)=> console.log("Error connecting to", err));




// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // Add this to handle JSON body

app.use((req, res, next) => {
  fs.appendFile(
    "log.txt",
    `\n ${Date.now()}: ${req.method}: ${req.path}`,
    (err, data) => {
      next();
    }
  );
});

// Routes

app.use("/users", userRouter);
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





