import fs from 'fs';
import os from 'os';

console.log(os.cpus().length);

// fs.writeFileSync("contact.txt","Hey, Rahul jangir here")
// fs.writeFile("contact.txt","Hey, Rahul jangir here not sync",err =>{})


// const result = fs.readFileSync("./contact.txt","utf-8");
// console.log(result);

// fs.readFile("./contact.txt",(err,data)=>{
//     if(err)
//          console.log(err);
//     else{
//         console.log(data.toString());
//     }
// })

