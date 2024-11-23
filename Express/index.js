import express from 'express';






const app = express();

app.get('/',(req,res)=>{
    res.send("hello you are on home page");
})

app.get('/about',(req,res)=>{
    res.send(`hello ${req.query.name}`);
})

app.get('/contact',(req,res)=>{
    res.send("this is contact page");
})


app.listen(3000, ()=>{
    console.log("server is running on port 3000");
})

