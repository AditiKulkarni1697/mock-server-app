const jsonServer = require("json-server"); // importing json-server library

var cors = require('cors')

import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

const server = jsonServer.create();

server.use(cors())

const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000; // you can use any port number here; i chose to use 3001

server.use(middlewares);
server.use(router);

server.post("/",async(req,res)=>{
    try{
   // res.send("posted")
    const __dirname = dirname(fileURLToPath(import.meta.url))
const file = join(__dirname, 'db.json')

// Configure lowdb to write data to JSON file
const adapter = new JSONFile(file)
const defaultData = { posts: req.body }
const db = new Low(adapter, defaultData)
await db.write()
res.send("posted")
    }
    catch(err){
        console.log(err)
    }
})

server.listen(port);