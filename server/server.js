var express = require('express');
var path = require('path');
const http = require('http')
var cors = require('cors')

var dotenv = require('dotenv').config({path: '.env'});
var ENVIRONMENT = process.env.ENVIRONMENT || 'development';

//create our app
const app = express();
app.use(cors())
var API = require('./../app/backend/api')
app.use('/api', API)

var routes = require('./routes/routes');
app.use(express.static('public'));
//path for ejs
app.set('views', path.join(__dirname, '../public'));
//setting ejs view engine
app.set('view engine', 'ejs');

app.use('/', routes);

app.listen(3030, function() {
    console.log('Server is up on port 3030');
});

if( process.argv[2] === 'dev'){	
	app.use(express.static(path.join(__dirname, '../public')))
}
else{
	app.use(express.static(path.join(__dirname, 'build')))
}

const port = process.env.PORT || '8080'
app.set('port', port)
const server = http.createServer(app)

server.listen(port, () => console.log(`API running on localhost:${port}`))

module.exports = app