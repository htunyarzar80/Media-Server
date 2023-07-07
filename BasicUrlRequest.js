const http = require('http')

const routes = {
    "GET":{
        "/": ()=>console.log("Get Method and Path /"),
        "/home":()=> console.log("Get Method and Path /home")
    },
    "POST":{
        "/": ()=>console.log("Post Method and Path /"),
        "/about":()=> console.log("Post Method and Path /about")
    }
}

 const startFunction = (req,res)=>{

    const reqMethod = req.method;
    const url = req.url;
    routes[reqMethod][url]()
}
const server = http.createServer(startFunction)

server.listen(3000,()=>{
    console.log("Server is running at port 3000")
})