import fs from 'fs'

fs.appendFile("./fs.files/append.txt","\n appened data willcome soooon",(err)=>{
    if(err){
        console.error(err);
    return;
    }

})