import express from 'express';


const app = express();

const port = 8000;


app.get('/',(req,res)=>{
    res.send("you are on home page");
})

// app.get('/',(req,res)=>{
//     res.send("hello you are on home page");
// })

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
    console.log("There is no error")
})


