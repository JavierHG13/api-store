import { Router } from "express";
import { register, login } from "../controllers/auth.controller.js";

const router = Router();

router.post('/registro',  register);

router.post('/login', login);

export default router;

/* Json para crear un usuaro nuevo
{
  "nombreUsuario": "Javier Hernandez",
  "email": "20230077@uthh.edu.mx",
  "password": "123456",
  "rol": "admin"
}
{
  "email": "20230077@uthh.edu.mx",
  "password": "123456"
}

*/