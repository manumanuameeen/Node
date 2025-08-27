import { error } from "console";
import {Worker}from "worker_threads"


let thread_count = 4 ;

for(let  i=0 ; i<thread_count;i++){
let worker = new Worker("./worker.js");

worker.postMessage(`worker:${i+1} start!!`);
worker.on("message",(msg)=>{
    console.log("mes:"+msg)
})
worker.on(error,(err)=>{
    console.log("error found"+err);
})
worker.on("exit",(code)=>{
    console.log(`worker finished with code:${code}`)
})
}