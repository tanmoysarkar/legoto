const express = require('express')
var api = express.Router()
var mongoose = require('mongoose');
var url = 'mongodb://root:root123@ds237660.mlab.com:37660/legoto';
mongoose.connect(url)
var product = require('./models/product')

api.get('/product', function(req, res){

	product.find(function(err, result){
		if(err) throw err;
		res.json(result)
	})
})


module.exports = api;