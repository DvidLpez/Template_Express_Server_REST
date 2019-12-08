import { Router } from "express";
import { AUTH_TOKEN } from "../app/middleware/auth";
import PostController from '../app/controllers/post';

let postRoutes = Router();
let postCtrl = new PostController();

// Obtener post paginados
postRoutes.get('/', [ AUTH_TOKEN ], postCtrl.getPostPaginate );
// Crear nuevo post
postRoutes.post('/', [ AUTH_TOKEN ], postCtrl.createPost);
// Servicio para subir archivo en un nuevo post
postRoutes.post('/upload', [ AUTH_TOKEN ], postCtrl.uploadFile);
// Retorna la imagen seleccionada
postRoutes.get('/imagen/:userid/:img', postCtrl.getUrlImage);

export default postRoutes;