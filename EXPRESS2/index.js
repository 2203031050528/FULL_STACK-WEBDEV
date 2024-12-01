const express = require('express');


const app  = express();


app.get('/',(req,res)=>{
    return res.send("Hello from home page!");
})

app.get('/about',(req,res)=>{
    return res.send(`Hello ${req.query.name}` );

})


app.listen(8000,()=>{
    console.log("Server is running on port 8000");
 });
