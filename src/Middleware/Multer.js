import multer from 'multer';
import fs  from 'node:fs';

export const upload = multer( { dest: 'uploads/' } );

//Funcion para guardar la imagen mas personalizadas
export const saveImage = (file) =>{
    const newPath = `./uploads/${file.originalname}`
    
    fs.renameSync(file.path, newPath);

    return newPath;
}

