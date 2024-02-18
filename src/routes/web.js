import express from 'express';
import { handleHome } from '../controller/homeController';
import { handleCreateUser, handleUser,handleDeleteUser } from '../controller/userController';

const router = express.Router();

const initWebRoutes = (app) => {
    router.get('/', handleHome);
    router.get('/user', handleUser);
    router.post('/user/create-user', handleCreateUser);
    router.post('/del-user/:id', handleDeleteUser);
    return app.use('/', router);
}

export default initWebRoutes;