const express = require('express');
const app = express();
const PORT = 8000
const {connectMongodb} = require('./connect');
const urlroute = ("./routes/url")

connectMongodb('mongodb://127.0.0.1:27017/shorturl').then(()=>{
    console.log('Connected to MongoDB')
})

app.use("/url",urlroute);
app.listen(PORT,()=>{
    print(`Server listening on port :${PORT}`)
});




