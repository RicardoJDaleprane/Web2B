var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    categoria: {type: String, required: true}   
});

module.exports = mongoose.model('Categoria_Produto', schema);