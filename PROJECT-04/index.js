const express = require("express");
const {connectmongodb} = require("./connection")
const {logReqres} = require("./middleware");

const app = express();
const PORT = 8000;
const userrouter = require('./routes/user')
connectmongodb("mongodb://127.0.0.1:27017/mydatabase")

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // Add this to handle JSON body


app.use(logReqres("log.txt"));
// Routes

app.use("/users", userRouter);
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





