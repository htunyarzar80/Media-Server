const http = require('http')
 const startFunction = (req,res)=>{
    res.writeHead(200,{"Content-Type": "text/html"})
    if(req.method === "GET"){
        res.end("<h1>This is Get Request!</h1>")
    }else{
        res.end("<h1>This is POST Request!</h1>")
    }
    
}
const server = http.createServer(startFunction)

server.listen(3000,()=>{
    console.log("Server is running at port 3000")
})