import fs from "fs";
import { Duplex } from "stream";


const fileStream = fs.createWriteStream("duplexWrite.txt",{flags:"a"});

const duplex = new Duplex({
    write(chunk,encoding,callback){
        this.push(chunk)
       callback();
    }

    ,read(size){
        // this.push("demo");
        this.push(null);
    }
})

duplex.on("data",(data)=>{
    console.log(data.toString())
})
duplex.write("name:mohammed savad\n")
duplex.write("age:20\n")
duplex.end()
duplex.pipe(fileStream);




