import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    nombreUsuario: {
        type: String,
        required: true,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxlength: 100
    },
    password: {
        type: String,
        required: true,
        maxlength: 255
    },
    rol: {
        type: String,
        enum: ['admin', 'usuario'], // Define roles posibles
        default: 'usuario' // Valor por defecto
    }
}, {
    timestamps: true // Para agregar createdAt y updatedAt automáticamente
});

const User = mongoose.model('usuarios', usuarioSchema);

export default User;
