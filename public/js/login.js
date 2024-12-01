import { auth} from "./firebase.js";
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, signInWithEmailAndPassword, GithubAuthProvider} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { mensaje } from "./mensaje.js";

//Funcion para iniciar sesion con correo
const btn_login = document.getElementById('btn_login');

btn_login.addEventListener('click', async (e) => {
    e.preventDefault();

    const txt_email = document.getElementById('txt_email');
    const txt_contrasenia = document.getElementById('txt_contrasenia');


    if (!txt_email.value || !txt_contrasenia.value) {
        mensaje("Por favor, completa ambos campos de correo y contraseña.", "error");
        return;
    }


    try {
        
        // Intenta iniciar sesión con Firebase Authentication
        const resultado = await signInWithEmailAndPassword(auth, txt_email.value, txt_contrasenia.value);

        localStorage.setItem("user", resultado.user.email);

        mensaje("Bienvenido " + resultado.user.email, "success");

        setTimeout(() => {
            location.href = "./index.html";
        }, 3000);

    } catch (error) {

        //console.log(error.message);
        //console.log(error.code);

        if (error.code === 'auth/user-not-found')
        {
            mensaje("Usuario no encontrado. Verifica el correo ingresado.", "error");
        } 
        else if (error.code === 'auth/invalid-credential') 
        {
            mensaje("Contraseña incorrecta. Inténtalo de nuevo.", "error");
        } else if (error.code === 'auth/invalid-email') 
        {
            mensaje("Correo inválido. Asegúrate de que el formato del correo es correcto.", "error");

        } else if (error.code === 'auth/too-many-requests') 
        {
            mensaje("Demasiados intentos fallidos. Por favor, intenta más tarde.", "error");
        } else 
        {
            mensaje("Error desconocido al intentar iniciar sesión.", "error");
        }
    }
});

//Inicio de seion con Google
const google = document.getElementById('logGoogle')


google.addEventListener('click', async (e) => {
    e.preventDefault();

    const proveedor = new GoogleAuthProvider();
   
    try {
        
        const userAutenticado = await signInWithPopup(auth, proveedor);
        
        mensaje("Bienvenido " + userAutenticado.user.email, "success");

        localStorage.setItem("user", userAutenticado.user.email);
        
        mensaje("Bienvenido " + userAutenticado.user.email, "success");

        setTimeout(() => {
            location.href = "./index.html";
        }, 3000); 
    }
    catch (error) {
        console.log(error);
        mensaje("Ocurrió un error", "error");
    }
});

//Inicio de seion con facebook
const facebook = document.getElementById('logFacebook')


facebook.addEventListener('click', async (e) => {
    e.preventDefault();

    const proveedorFacebook = new FacebookAuthProvider();
   
    try {
        
        const userAutenticado = await signInWithPopup(auth, proveedorFacebook);
        
        mensaje("Bienvenido " + userAutenticado.user.email, "success");

        // Guardar el usuario
        localStorage.setItem("user", userAutenticado.user.email);
        
        mensaje("Bienvenido " + userAutenticado.user.email, "success");

        setTimeout(() => {
            location.href = "./index.html";
        }, 3000); 
    }
    catch (error) {
        console.log(error);
        mensaje("Ocurrió un error", "error");
    }
});