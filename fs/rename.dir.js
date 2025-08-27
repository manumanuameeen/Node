import { error } from 'console'
import fs from 'fs'
fs.rename("./directy","test file",(error)=>{
    if(error){
        console.error(error);
        return ;
    }
console.log("Name changed")

})