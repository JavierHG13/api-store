import express from "express";
import cors from "cors"
import ProductosRoute from './routes/productos.route.js';
import ImagenesRoute from './routes/imagenes.route.js'
import AuthRoute from './routes/auth.routes.js';

import morgan from 'morgan';

const app = express();


// Configuración de CORS para permitir solo un dominio específico
const URL_LOCAL = 'http://localhost:4200';
const URL_DEPLOY = 'https://api-store-rouge.vercel.app';

const corsOptions = {
  origin: [URL_LOCAL, URL_DEPLOY],  
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions)); //Activar CORS en la app

app.use(morgan('dev'));

app.use(express.json());  // Para manejar solicitudes JSON
app.use(express.urlencoded({ extended: true }));  // Para manejar formularios URL-encoded


// Middleware para servir archivos estáticos
app.use(express.static('public'));

//Rutas de los endpoinds
app.use('/api/', ProductosRoute);
app.use('/api/', ImagenesRoute);
app.use('/api/', AuthRoute);


export default app;
