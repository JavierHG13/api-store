import mongoose from 'mongoose';

const productosSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true, // Obligatorio
        trim: true, // Elimina espacios al inicio y final
    },
    descripcion: {
        type: String,
        required: true,
        trim: true,
    },
    categoria: {
        type: String,
        required: true,
        trim: true,
    },
    precio: {
        type: Number,
        required: true,
        min: 0, // El precio debe ser mayor o igual a 0
    },
    genero: {
        type: String,
        enum: ['Hombre', 'Mujer', 'Unisex'], //
        required: true,
    },
    estilo: {
        type: String,
        enum: ['Deportivo', 'Casual', 'Formal'], // Solo puede ser uno de estos valores
        required: true,
    },
    imagen1: {
        type: String,
        required: true,
    },
    imagen2: {
        type: String,
        required: false, // Opcional
    },
    imagen3: {
        type: String,
        required: false, // Opcional
    },
    video: {
        type: String,
        required: false, // Opcional
    }
}, {
    timestamps: true // Agrega automáticamente campos `createdAt` y `updatedAt`
});

const Product = mongoose.model('productos', productosSchema);

export default Product;
