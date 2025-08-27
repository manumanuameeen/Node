

import {promises as fs}from "fs";
async function promis() {
    try {
        await fs.writeFile("./promise.txt","the demo to just try\n",);
        console.log("file writed");
        await fs.appendFile("./promise.txt","second demo thing\n")
        console.log("file appended");
           const data =await fs.readFile("./promise.txt");
           console.log(data.toString())
        console.log("data readed succesfully")
        await fs.unlink("./fs.files/writefile.txt")
        console.log("file removed")
        
    } catch (error) {
        console.error(error);
                
    }
}
promis()