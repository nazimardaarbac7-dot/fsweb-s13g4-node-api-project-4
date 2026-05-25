const server = require("./server");

const PORT = process.env.PORT
require("dotenv").config()
server.listen(PORT,()=>{
    console.log("Server Running on PORT1:"+PORT);
})