//tao server

//cach 1: khong su dung thu vien
// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello world\n');
// });

// server.listen(port,hostname,()=>{
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

//cach 2: su dung thu vien express

require('dotenv').config()
const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web')
const connection = require('./config/database')

console.log(">>> check env:",process.env.PORT);
const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

//config template engine
configViewEngine(app)

//khai bao route
app.use('/',webRoutes)

//create connection to database


connection.query(
    'select * from USERS u',
    function (err,results,fields){
        console.log(">>>results = ",results);
        //console.log(">>>fields = ",fields);
    }
);

app.listen(port,hostname,()=>{
    console.log(`Example app listening on port${port}`)
})
