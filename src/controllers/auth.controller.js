import User from '../models/auth.models.js';
import bcrypt from 'bcryptjs'

export const register = async (req, res) => {

    const { nombreUsuario, email, password, rol} = req.body;

    console.log("Datos recibidos:", req.body);

    try {
        if (!email || !password || !nombreUsuario) {
            return res.status(400).json({ message: "Faltan algunos datos" });
        }

        const userSearch = await User.findOne({ email });

        if(userSearch){
            return res.status(400).json({ message: "El correo ya esta en uso" });
        }

        if(password.length < 5){
            return res.status(400).json({ message: "La contraseña es demasiado debil" });
        }

        console.log("Iniciando el hash de la contraseña...");

        const passwordHash = await bcrypt.hash(password, 10); // Hash de la contraseña
        console.log("Contraseña hasheada:", passwordHash);

        const newUser = new User({
            nombreUsuario,
            email,
            password: passwordHash,
            rol: rol || 'usuario' // Asigna 'usuario' si no se especifica el rol
        });

        const userSaved = await newUser.save(); // Guardar el usuario en la base de datos

        // Responder al cliente con los datos del usuario
        res.json({
            id: userSaved._id,
            email: userSaved.email,
            role: userSaved.role, // Incluimos el rol en la respuesta
            createdAt: userSaved.createdAt,
            message: "Usuario creado correctamente"
        });

    } catch (error) {
        console.log("Error al registrar usuario:", error); // Log de error si ocurre algo
        res.status(500).json({ message: error.message });
    }
};




export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email y contraseña son obligatorios' });
    }
    

    try {
        const userFound = await User.findOne({ email }); // Buscar el usuario por email

        // Si no encuentra el usuario
        if (!userFound) return res.status(400).json({ message: "Usuario no encontrado" });

        // Comparar la contraseña recibida con la de la base de datos
        const isMatch = await bcrypt.compare(password, userFound.password);

        // Si la contraseña no coincide
        if (!isMatch) return res.status(400).json({ message: "Contraseña incorrecta" });


        // Devolver los datos del usuario junto con su rol
        res.status(200).json({
            success: true,
            message: "Inicio de sesión exitoso",
            data: {
                role: userFound.rol,  // Enviar el rol del usuario
                createdAt: userFound.createdAt
            }
        });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const logout = async (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    });

    return res.status(200).json({ message: "Sesión terminada" });
}
