import express from "express";
const route = express.Router();



let checkMethod = async (req,res,next) => {
    try {
        if(req.method !=="DELETE"){
            return res.status(401).json({
                status:false,
                message:" only allowed delet method"
            })
        }

        next()

    } catch (error) {
        return res.status(401).json({
            status:false,
            message:"erro found :"+error
        })
    }
}

route.use("/remove",checkMethod);

route.delete("/remove",(req,res)=>{
    res.json({message:"delete method world"});
})



export default route



