import fs from 'fs'

fs.rmdir("./delete.file",{recursive:true,force:true},(err)=>{
    if(err){
        console.error(err);
        return ;
    }
    console.log("<FILE DELETED>")
})