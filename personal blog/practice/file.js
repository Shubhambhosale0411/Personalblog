const fs =require('fs');

// fs.readFile('./blogs/blog1.txt',(err,data)=>{
//     if (err){
//         console.log("error");
//     }
//     console.log(data.toString());
// });


// fs.writeFile('./blogs/blog1.txt',"hello buddy i am an ait stud",()=>{
  
//     console.log("written");
// });
if(!fs.existsSync('./assets')){
fs.mkdir('./assets',(err)=>{
    if(err)
    {
        console.log(err);
    }
    console.log("folder");
});
}
//unlink to delete 