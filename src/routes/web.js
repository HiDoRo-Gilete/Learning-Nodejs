const express = require('express')
const router = express.Router()
const {getHomepage,getInfo,getHidro} = require('../controllers/homeController');


router.get('/',getHomepage)
router.get('/info/',getInfo)

router.get('/test',getHidro)

module.exports = router