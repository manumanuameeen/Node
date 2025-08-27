import fs from 'fs'
fs.readdir("./directy",(err,data)=>{
    if(err){
        console.error(err);
    }
    console.log("files in directory:"+data)
})