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

const express = require('express')
const path = require('path')
require('dotenv').config()

console.log(">>> check env:",process.env.PORT);
const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME
app.get('/',(req,res)=>{
    // res.send('Hello world')
    res.render('example.ejs')
})
app.get('/info/',(req,res)=>{
    res.send("name: Huynh Quoc Huy")
})

app.get('/test',(req,res)=>{
    res.send('<h1>Hidro xin chao ban</h1>')
})
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.listen(port,hostname,()=>{
    console.log(`Example app listening on port${port}`)
})
