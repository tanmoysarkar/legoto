var express = require('express');
var router = express.Router();

var config = require('../../config/config');
// Required controller modules

var homeView = require('../controllers/home');

router.get('/', function(req, res) {
    res.redirect('/home')
});

router.get('/home', homeView.index);

module.exports = router;
