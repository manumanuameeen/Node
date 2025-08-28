import cluster from 'cluster'
import os from "os"
import express from "express";




let cpu_count = os.cpus().length;

if(cluster.isPrimary){
    console.log(`workerid ${process.pid}`);
    
    for(let i=0 ; i <cpu_count;i++){
        cluster.fork();
    }
    
    cluster.on("exit",(Worker,code,signal)=>{
        console.log(`worker died worker:${Worker.process.pid}. Restarting...`);
        cluster.fork();
    })
}  else{
    const app = express();

    app.get("/",(req,res)=>{
        res.send(`worker working on ${process.pid}`)
    })

    app.get("/heavy",(req,res)=>{
        let sum = 0 ;
        for(let i =0 ; i< 1e8;i++){
            sum +=i
        }
        res.send(`worker :${process.pid} finished the heavy work the sum is: ${sum}`)
    })

    app.listen(3000,()=>{
        console.log(`server connected on port 3000 in worker: ${process.pid}`);
        
    })
}
   
