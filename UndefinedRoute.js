const http = require('http')
const url = require('url');

const routes = {
    "GET":{
        "/": (req,res)=>{
            res.writeHead(200,{"Content-Type":"text/html"})
            res.end("<h1>Get Method / route </h1>")
        },
        "/home":(req,res)=> {
            res.writeHead(200,{"Content-Type":"text/html"})
            res.end("<h1>Get Method /home route </h1>")
        }
    },
    "POST":{
        "/": (req,res)=>{
            res.writeHead(200,{"Content-Type":"text/html"})
            res.end("<h1>Post Method / route </h1>")
        },
        "/about":(req,res)=> {
            res.writeHead(200,{"Content-Type":"text/html"})
            res.end("<h1>Post Method /about route </h1>")
        }
    },
    "NA":(req,res)=>{
            res.writeHead(404);
            res.end("<h1>No Page for that Route</h1>")
    }

}

 const startFunction = (req,res)=>{

    const reqMethod = req.method;
    const urlParams =url.parse(req.url,true) ;
    // console.log(urlParams)
    // console.log(urlParams.pathname)

   const resoverRoute =  routes[reqMethod][urlParams.pathname];
//    console.log(resoverRoute)

    if(resoverRoute != null && resoverRoute != undefined){
        resoverRoute(req,res);
    }else{
        routes["NA"](req,res)
    }

}
const server = http.createServer(startFunction)

server.listen(3000,()=>{
    console.log("Server is running at port 3000")
})


