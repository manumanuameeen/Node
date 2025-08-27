import fs, { createReadStream, createWriteStream } from "fs";
import { Transform } from "stream";

const readable = createReadStream("./example.txt");
const writable = createWriteStream("./coppiedfile.txt");

const transfromsStream = new Transform({
    transform(chunk,encoding,callback){
        const modified = chunk.toString().toUpperCase()
        callback(null,modified)
    }
})
readable.pipe(transfromsStream).pipe(writable);

writable.on("finish",()=>{
    console.log('data coppied successfully')
})

