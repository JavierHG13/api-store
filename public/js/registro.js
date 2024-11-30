import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { mensaje } from "./mensaje.js";

const btn_registrar = document.getElementById('btn_registrar');

btn_registrar.addEventListener('click', async (e) => {
    e.preventDefault();

    const txt_email = document.getElementById('txt_email');
    const txt_contrasenia = document.getElementById('txt_contrasenia');

    try {

        const resultado = await createUserWithEmailAndPassword(auth, txt_email.value, txt_contrasenia.value);
        
        // Guarda el usuario
        localStorage.setItem("user", resultado.user.email);

    
        mensaje("Cuenta creada correctamente", "success");

        setTimeout(() => {  
            document.location.href="productos.html"
        }, 4000);



    } catch (error) {

        console.log(error.message);
        console.log(error.code);

        // Manejo de errores específicos de Firebase
        if (error.code === 'auth/email-already-in-use') {

            mensaje("El correo ya está registrado", "error");

        } else if (error.code === 'auth/invalid-email') {

            mensaje("Correo inválido", "error");

        } else if (error.code === 'auth/weak-password') {

            mensaje("La contraseña es demasiado débil", "error");

        } else {
            mensaje("Error al registrar usuario", "error");
        }
    }
});

