const jsonServer = require("json-server"); // importing json-server library
var cors = require('cors')

const server = jsonServer.create();

server.use(cors())

const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000; // you can use any port number here; i chose to use 3001

server.use(middlewares);
server.use(router);

server.post("/",(req,res)=>{
    console.log(res)
})

server.listen(port);