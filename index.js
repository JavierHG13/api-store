import { connectDB } from "./src/db.js";
import app from "./src/app.js";

// Ejecutamos la funcion para la conexión a la base de datos
connectDB();

// Ejecutamos la aplicación en el puerto 4000
const port = 3000;

app.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});
