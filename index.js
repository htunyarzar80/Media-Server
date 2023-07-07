const http = require('http')
const url = require('url');
const qs = require('querystring')

require('dotenv').config()


const responder = (req,res,param)=>{
    res.writeHead(200,{"Content-Type":"text/html"})
    res.end(param)
}

const routes = {
    "GET":{
        "/": (req,res)=>{
            responder(req,res,`<h1>Get Method / route </h1>`)
        },
        "/home":(req,res)=> {
            
        }
    },
    "POST":{
        "/": (req,res)=>{
            responder(req,res,`<h1>Post Method / route </h1>`)
        },
        "/api/login":(req,res)=> {
            let body ='';
           req.on('data',data=>{
            body +=data
           })
           req.on('end',()=>{
            let  query = qs.parse(body)
            console.log(query);
            res.end();
           })
        }
    },
    "NA":(req,res)=>{
            responder(req,res,`<h1>No Page for that Route</h1>`)
    }

}

 const startFunction = (req,res)=>{

    const reqMethod = req.method;

    const params =url.parse(req.url,true) ;
    // const name = params.query.name;
    // const age = params.query.age;
    // console.log(name)
    // console.log(age)

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
    console.log(`Server is running ${process.env.PO}!`)
})


