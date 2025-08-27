import fs, { createWriteStream } from "fs";

const writable = createWriteStream("./example.txt");

writable.write("\ngood mornig ameen")
writable.write("\n make your day best")
writable.write("\n inn sha allah")
writable.end("/finished writing")

writable.on("finish",()=>{
    console.log("all data written");
})
