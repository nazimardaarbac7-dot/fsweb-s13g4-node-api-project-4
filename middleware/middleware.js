// LOGGER
function logger(req,res,next){
    const{ method,url,timeStamp} = req
    console.log(`method: ${method} , URL:${url} , timeStamp:${timeStamp}`);
    next();
}

// USERNAME VALIDATOR
function validateUser( req,res,next){
    const userName = req.body.name;
    if(!name || name.trim() === "")
        return res.status(400).json({message:"gerekli text alanı eksik."});
    else
        next();
}
 
module.exports = {
    logger,
    validateUser,
}
