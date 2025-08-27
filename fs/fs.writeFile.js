import fs from "fs"

fs.writeFile("./fs.files/writefile.com"," Hai iam mohammed ameen",(err)=>{
    if(err){
        console.error(err);
    }
  
})