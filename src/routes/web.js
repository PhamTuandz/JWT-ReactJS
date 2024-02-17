import express from 'express';
import { handleHome } from '../controller/homeController';
import { handleCreateUser, handleUser } from '../controller/userController';

const router = express.Router();

const initWebRoutes = (app) => {
    router.get('/', handleHome);
    router.get('/user', handleUser);
    router.post('/user/create-user', handleCreateUser);
    return app.use('/', router);
}

export default initWebRoutes;