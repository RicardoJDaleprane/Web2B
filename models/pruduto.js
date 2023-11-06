var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    nome: {type: String, required: true},
    categoria_produto: {type: Schema.Types.ObjectId, ref: 'Categoria_Produto'}

});

module.exports = mongoose.model('Produto', schema);