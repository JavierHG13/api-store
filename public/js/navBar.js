//Cargar el navabar
const cargarNavBar = () => {

  const navBar = document.getElementById('navbar');

  navBar.innerHTML = `
  <nav>
      <div class="logo">Mi Página</div>
      <div class="nav-links">
          <a href="index.html">Inicio</a>
          <a href="productos.html">Productos</a>
          <a href="contacto.html">Contacto</a>
          <a href="sobre.html">Sobre Nosotros</a>
          <button id="cerrar_sesion" onclick="CerrarSesion()">Cerrar Sesión</button>
      </div>
  </nav>`;
}

cargarNavBar();