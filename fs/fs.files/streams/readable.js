import fs from "fs";

const readable = fs.createReadStream("./example.txt");
readable.on("data",(chunks)=>{
    console.log("chunk received",chunks.toString())
})

readable.on("end",()=>{
    console.log("<Finished>");
});