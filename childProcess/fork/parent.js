
import {fork} from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";


const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename)


const childPath = join(__dirname,"childSide.js")
console.log(childPath)
const child = fork("./fork/childSide.js");

child.on("message",(msg)=>{
    console.log("message from child:"+msg);
})
child.send("hlooo iam your parent:"+__filename)