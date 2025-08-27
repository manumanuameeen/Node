import fs from "fs";

fs.unlink("./fs.files/writefile",(err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("<File Deleted>")
})