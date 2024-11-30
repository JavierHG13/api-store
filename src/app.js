import express from "express";
import ProductosRoute from './routes/productos.route.js';
import ImagenesRoute from './routes/imagenes.route.js'
import AuthRoute from './routes/auth.routes.js';

import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));

app.use(express.json());  // Para manejar solicitudes JSON
app.use(express.urlencoded({ extended: true }));  // Para manejar formularios URL-encoded

// Middleware para servir archivos estáticos
app.use(express.static('public'));

//Rutas de los endpoinds
app.use(ProductosRoute);
app.use(ImagenesRoute);
app.use(AuthRoute);


export default app;
