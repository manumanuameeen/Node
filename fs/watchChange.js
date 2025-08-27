import fs from 'fs'


fs.watch("./fs.files/writefile.txt",(eventtype,filename)=>{
    if(filename){
        console.log(`file changed :${filename} event :${eventtype}`)
    }else{
        console.log("file not found");
        
    }
})