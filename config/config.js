var dotenv = require('dotenv').config({path: '.env'});
var ENVIRONMENT = process.env.ENVIRONMENT || 'development';

console.log('Website IS IN--"' + process.env.ENVIRONMENT + '" ENVIRONMENT');


var config = {};
var initialise = function (ENVIRONMENT) {
    switch (ENVIRONMENT) {
        case 'production': {
            config = {
                API_BASE: 'http://localhost:8080/'
            };
            break;

        }
        case 'development': {
            config = {
                API_BASE: 'http://localhost:8080/'
            };
            break;

        }
        case 'local': {
            config = {
                API_BASE: 'http://localhost:8080/'
            };
            break;
        }
        default :
            config = {
                API_BASE: 'http://localhost:8080/'
            };
            break;
    }
};
initialise(ENVIRONMENT);

module.exports = config;