const express = require('express')
const router = express.Router()


router.get('/',(req,res)=>{
    // res.send('Hello world')
    res.render('example.ejs')
})
router.get('/info/',(req,res)=>{
    res.send("name: Huynh Quoc Huy")
})

router.get('/test',(req,res)=>{
    res.send('<h1>Hidro xin chao ban</h1>')
})

module.exports = router