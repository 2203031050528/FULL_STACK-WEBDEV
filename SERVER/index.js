import http from "http";
import fs from "fs";
import url from "url";


const server = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url}new req recived \n`;
    const myurl = url.parse(req.url,true);
    console.log(myurl);

    fs.appendFile("log.text",log,(err,data)=>{
        switch(myurl.pathname){
            case "/": res.end("Home page");
            break;
            case '/about':
                const usename  = myurl.query.myname;
                res.end(`hi ${usename}`);
            break;
            case '/search':

                const search = myurl.query.search_query;
                res.end("here is your result for "+search);
            break;

            default: res.end("404 page not found");
        }
    })
   
    
})


server.listen(8000,()=>{
    console.log("server is running on port 8000")
})
