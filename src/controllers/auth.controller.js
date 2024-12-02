import User from '../models/auth.models.js';
import bcrypt from 'bcryptjs'

export const register = async (req, res) => {
    const { nombreUsuario, email, password, rol } = req.body;

    console.log("Datos recibidos:", req.body);

    try {
        // Verificar datos requeridos
        if (!email || !password || !nombreUsuario) {
            return res.status(400).json( [ { Estado: "false", Salida: "Faltan algunos datos" } ]);
        }

        // Buscar si el email ya está en uso
        const userSearch = await User.findOne({ email });

        if (userSearch) {
            return res.status(400).json( [ { Estado: "false", Salida: "El correo ya está en uso" } ]);
        }

        // Validar la longitud de la contraseña
        if (password.length < 5) {
            return res.status(400).json( [ {
                Estado: "false",
                Salida: "La contraseña es demasiado débil"
            } ]);
        }

        console.log("Iniciando el hash de la contraseña...");
        // Hashear la contraseña
        const passwordHash = await bcrypt.hash(password, 10);


        // Crear un nuevo usuario
        const newUser = new User({
            nombreUsuario,
            email,
            password: passwordHash,
            rol: rol || 'usuario' // Asigna 'usuario' si no se especifica el rol
        });

        const userSaved = await newUser.save(); // Guardar el usuario en la base de datos

        res.json( [ { Estado: "true", Salida: "Usuario registrado exitosamente." } ] );

    } catch (error) {
        console.log("Error al registrar usuario:", error);

        res.status(500).json( [ { Estado: "false", Salida: `Error del servidor: ${error.message}` } ]);
    }
};


export const login = async (req, res) => {
    const { email, password } = req.body;

    // Validación de datos
    if (!email || !password) {
        return res.status(400).json( [ {
            Estado: "Incorrecto",
            Salida: "El correo y contraseña son obligatorios"
        } ] );
    }

    try {
        // Buscar usuario por email
        const userFound = await User.findOne({ email });

        // Si no se encuentra el usuario
        if (!userFound) {
            return res.status(400).json( [ { Estado: "Incorrecto", Salida: "Usuario no encontrado" } ] );
        }

        // Comparar la contraseña ingresada con la almacenada en la base de datos
        const isMatch = await bcrypt.compare(password, userFound.password);

        // Si la contraseña no coincide
        if (!isMatch) {
            return res.status(400).json( [ { Estado: "Incorrecto", Salida: "Contraseña incorrecta" } ] );
        }

        // Respuesta en caso de éxito con la estructura solicitada
        res.status(200).json([
            {
                Estado: "Correcto",
                Salida: "Inicio de sesion exitoso",
                id: userFound._id,
                nombreUsuario: userFound.nombreUsuario,
                rol: userFound.rol
            }
        ]);


    } catch (error) {
        console.error("Error en el login:", error);
        res.status(500).json( [ {
            Estado: "Incorrecto",
            Salida: `Error del servidor: ${error.message}`
        } ]);
    }
};



export const logout = async (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    });

    return res.status(200).json({ message: "Sesión terminada" });
}
