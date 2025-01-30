import { Router } from "express";
import { getAllProducts, createProduct, getProductById, getProductsByStyle, getProductsByStyleAndGender, updateProductById, deleteProductById } from "../controllers/productos.controller.js";
import { upload } from "../Middleware/Multer.js"; //Middleware para subir imagenes

const router = Router();

// Obtener todos los productos
router.post('/productos/crear', createProduct);

// Obtener todos los productos
router.get('/productos', getAllProducts);

// Obtener un producto por ID
router.get('/productos/:id', getProductById);

// Obtener productos por estilo
router.get('/productos/estilo/:estilo', getProductsByStyle);

// Obtener productos por estilo y género
router.get('/productos/:estilo/:genero', getProductsByStyleAndGender);

// Crear un nuevo producto (con subida de una imagen)
//router.post('/productos/crear', upload.single('imagen1'), createProduct);

// Actualizar un producto por ID
router.put('/productos/actualizar/:id', updateProductById);

// Eliminar un producto por ID
router.delete('/productos/eliminar/:id', deleteProductById);

export default router;

//Jason para crear un nuevo producto
//Url: http://localhost:4000/api/productos/crear
/*
{
    "nombre": "Camiseta Deportiva",
    "descripcion": "Camiseta de algodón, ideal para deporte. Disponible en varios colores.",
    "categoria": "Ropa",
    "precio": 19.99,
     "genero": "Hombre",
    "estilo": "Deportivo",
    "imagen1": "https://ejemplo.com/imagenes/camiseta.jpg",
    "imagen2": "https://ejemplo.com/imagenes/camiseta_back.jpg",
    "imagen3": "https://ejemplo.com/imagenes/camiseta_side.jpg",
    "video": "https://ejemplo.com/videos/camiseta_promo.mp4",
  }
  */
  

//Ruta para obtener por estilo y genero
//http://localhost:4000/api/productos/estilo-genero?estilo=Deportivo&genero=Hombre
//http://localhost:4000/api/productos/Formal/Hombre
//https://api-store-rouge.vercel.app/api/productos/Deportivo/Hombre


//Ruta para obtener por estilos
//http://localhost:4000/api/productos/estilo/Casual
//https://api-store-rouge.vercel.app/api/productos/estilo/Deportivo




















/*router.post('/peliculas/crear', upload.single('imagen') , (req, res) =>{
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No se subió ningún archivo' });
        }
        res.status(200).json({ message: 'Imagen subida con éxito', file: req.file });
    } catch (error) {
        res.status(500).json({ error: 'Error al subir la imagen' });
    }

    const newPath = saveImage(req.file);

    console.log(req.file)
    console.log("nueva ruta"+ newPath)
}) */


