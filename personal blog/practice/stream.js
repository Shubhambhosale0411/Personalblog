const fs = require("fs");
const readstream=fs.createReadStream("./blogs/blog1.txt",{encoding: "utf-8"});
readstream.on('data',(chunk)=>{
    console.log(chunk);
})