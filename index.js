const http = require('http')
const url = require('url');
require('dotenv').config()
const routes = {
    "GET":{
        "/": (req,res,params)=>{
            res.writeHead(200,{"Content-Type":"text/html"})
            res.end("<h1>Get Method / route </h1>")
        },
        "/home":(req,res,params)=> {
            res.writeHead(200,{"Content-Type":"text/html"})
            res.end(`<h1>Get Method /home route with params of ${params.query.name} and ${params.query.age} </h1>`)
        }
    },
    "POST":{
        "/": (req,res,params)=>{
            res.writeHead(200,{"Content-Type":"text/html"})
            res.end("<h1>Post Method / route </h1>")
        },
        "/about":(req,res,params)=> {
            res.writeHead(200,{"Content-Type":"text/html"})
            res.end("<h1>Post Method /about route </h1>")
        }
    },
    "NA":(req,res,params)=>{
            res.writeHead(404);
            res.end("<h1>No Page for that Route</h1>")
    }

}

 const startFunction = (req,res)=>{

    const reqMethod = req.method;
    const params =url.parse(req.url,true) ;
    const name = params.query.name;
    const age = params.query.age;
    console.log(name)
    console.log(age)

   const resoverRoute =  routes[reqMethod][params.pathname];
//    console.log(resoverRoute)

    if(resoverRoute != null && resoverRoute != undefined){
        resoverRoute(req,res,params);
    }else{
        routes["NA"](req,res,params)
    }

}
const server = http.createServer(startFunction)

server.listen(process.env.PORT,()=>{
    console.log(`Server is running ${process.env.PORT}!`)
})


