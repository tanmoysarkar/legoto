var express = require('express');
var router = express.Router();
var app = express();
var routes = require('./routes');


router.get('/', function(req, res) {
    res.redirect('/routes');
});


module.exports = router;
