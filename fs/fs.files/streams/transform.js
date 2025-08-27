import fs, { createWriteStream } from "fs";
import { Transform } from "stream";

const writable = createWriteStream("transform.txt",{flags:"a"})
const transformWrite = new Transform({
    transform(chunk,encoding,callabck){
        console.log("before applying :"+chunk+" | encoding:"+encoding);

        const modified = chunk.toString().toUpperCase()+"\n" 
        callabck(null,modified);
    }
})

// transformWrite.on("data",(chunk)=>{
    
// })
transformWrite.pipe(writable);


transformWrite.write("hloo World")
transformWrite.write("good morning")
transformWrite.write("welcome to asgard")
