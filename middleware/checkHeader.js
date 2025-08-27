const checkHeader = async (req, res,next) => {
    try {
        const name = req.headers["name"]
        if(!name||name !=="1111"){
            res.status(401).json({success:false,message:"no header data"})
        }

            next();
        
       console.log("success : true");
    } catch (error) {
        console.log(error);
    }
}

export {
  checkHeader,

} 