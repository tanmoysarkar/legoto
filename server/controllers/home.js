var config = require('../../config/config');
exports.index = function(req, res) {

    res.render('homeView', {config:JSON.stringify(config), constants:config})
};
