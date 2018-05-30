var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    item_name: {type: String, required: true, maxlength: 20},
    item_description: {type: String, required: true, maxlength: 100},
    item_photo: {type: String, required: true}
});

module.exports = mongoose.model('Product', schema);