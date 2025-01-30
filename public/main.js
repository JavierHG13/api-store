
import {onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { auth } from './js/firebase.js'

onAuthStateChanged(auth, (user) => {
    if (user) {
      // Usuario autenticado
      console.log('Usuario autenticado:', user);
    } else {
      // Usuario no autenticado, redirigir al login
      window.location.href = "login.html";
    }
  });


//Funcion para cerrar sesion
async function CerrarSesion(){

    await signOut(auth)
    console.log('sesion cerrada')

    alert("Estas sesuro de cerrar seion")
};

//Mostrar nombre del usuario logeado
const usuario = localStorage.getItem("user");
document.getElementById('email-placeholder').textContent = usuario;
