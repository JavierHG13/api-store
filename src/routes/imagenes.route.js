import { Router } from 'express';
import path from 'path';
import { fileURLToPath } from 'url'; // Importa fileURLToPath
// Solución para __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

//Ruta para obtener una imagene especifica
router.get('/obtenerImagen/:name', (req, res) => {
    
    const { name } = req.params;

    res.sendFile(path.join(__dirname, '../..', 'uploads/imagenes', name)); 
});

//Ruta para obtener un video
router.get('/obtenerVideo/:name', (req, res) => {
    const { name } = req.params;

    res.sendFile(path.join(__dirname, '../..', 'uploads/videos', name)); 
});



//Ruta estatica para cargar imagenes
//app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads'))); 

export default router;







//http://localhost:4000/api/obtenerImagen/gladiator.jpeg
