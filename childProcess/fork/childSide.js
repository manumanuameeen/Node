

 import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
process.on("message",(msg)=>{
        console.log(`message from parent:`+msg);
})
process.send("hi iam your child :"+__filename)