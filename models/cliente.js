var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    nome: {type: String, required: true},
    rua: {type: String},
    numero: {type: String},
    bairro: {type: String},
    cidade: {type: String},
    uf: {type: String},
    documento: {type: String}

});

module.exports = mongoose.model('Cliente', schema);