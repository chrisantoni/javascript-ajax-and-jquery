
var express = require('express');
var router = express.Router();
var controller = require('../controller/colorController')

/* GET home page. */
router.get('/color', controller.Color)

module.exports = router;
