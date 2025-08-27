import { error } from 'console'
import fs from 'fs'

fs.mkdir("./directy",{recursive:true},(err)=>{
    if(err){
        console.error(err);
    }
    console.log("created succesfully")
})