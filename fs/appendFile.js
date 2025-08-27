import fs from 'fs'

fs.appendFile("./fs.files/writefile.txt","\n appened data willcome soooon",(err)=>{
    if(err){
        console.error(err);
    return;
    }

})