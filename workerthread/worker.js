
import {parentPort} from "worker_threads";

parentPort.on("message",(msg)=>{
    let  sum = 0 
    for(let i =0 ; i<1e8;i++){
        sum+=i
    }
    parentPort.postMessage("worker recevied "+msg,`sum:${sum}`)
})
