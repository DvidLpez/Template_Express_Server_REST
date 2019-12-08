import { Router } from "express";
import { AUTH_TOKEN } from "../app/middleware/auth";
import UserController from '../app/controllers/user';

let userRoutes = Router();
let userCtrl = new UserController;

// Login de usuario
userRoutes.post('/login', userCtrl.login);
// Crear un  nuevo usuario
userRoutes.post('/create', userCtrl.newUser);
// Acturalizar el usuario y nuevo token
userRoutes.post('/update', [ AUTH_TOKEN ] , userCtrl.updateToken);
// Recoger el token del usuario para validarlo
userRoutes.get('/', [ AUTH_TOKEN ] , userCtrl.getUserToken);

export default userRoutes;