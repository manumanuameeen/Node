import  express from "express";
import dotenv from "dotenv";
import {checkHeader} from "./middleware/checkHeader.js";
import checkTheMethod from "./middleware/onlyMethod.js";

dotenv.config();
const app = express();
let PORT = process.env.PORT;

app.use((req,res,next)=>{
    res.locals.user = "manu";
    next();
})

app.get("/",(req,res)=>{
 console.log(res.locals.user);
    res.write("home page");
    res.end();
})

app.get("/",checkHeader,(req,res)=>{
    res.write("home page");
    res.end();
})

app.use("/",checkTheMethod);
app.listen(PORT,()=>{
console.log("the port running on the port :"+PORT);
})