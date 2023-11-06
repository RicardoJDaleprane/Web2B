var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    cliente: {type: Schema.Types.ObjectId, ref: 'Cliente'},
    data_entrega: {type: Date},
    hora_entrega: {type: Date},
    itens:[
        {produto: {type: Schema.Types.ObjectId, ref: 'Produto'}},
        {quantidade: {type: decimal}},
        {valor: {type: decimal}}


    ]

});

module.exports = mongoose.model('Pedidos', schema);