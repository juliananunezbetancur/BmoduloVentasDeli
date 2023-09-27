const { Schema, model } = require('mongoose')
const ProductoSchema = Schema({
    producto: {
        type: String,
        required: [true, 'El producto es obligatorio!']
    },
    cantidad: {
        type: Number,
        required: [true, 'La cantidad es obligatoria!']
    },
    cliente: {
        type: String,
        required: [true, 'El cliente es obligatorio!']
    },
    precio: {
        type: Number,
        required: [true, 'El precio es obligatorio!']
    }
})
module.exports = model('Producto', ProductoSchema)