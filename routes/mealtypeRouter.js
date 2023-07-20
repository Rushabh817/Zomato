var express = require('express');
var router = express.Router();
var { getmealtype, addmealtype}  = require('../controller/mealtypecontroller');

router.get('/', getmealtype);

router.get('/getmealtype', getmealtype);

router.post('/addmealtype', addmealtype);

module.exports = router;