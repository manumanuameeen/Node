

import {parentPort,threadId} from "worker_threads"


parentPort.on("message",(msg)=>{
    console.log(`mes:${msg} threadId:${threadId}`);
    let sum =0 ;
    for(let i =0 ; i< 1e8;i++){
        sum+=i+threadId;
    }
    parentPort.postMessage("threadId:"+threadId+" sum: "+sum+threadId)

})