import express from 'express';
import { handleHome } from '../controller/homeController';
import { handleUser } from '../controller/userController';

const router = express.Router();

const initWebRoutes = (app) => {
    router.get('/', handleHome);
    router.get('/user', handleUser);
    return app.use('/', router);
}

export default initWebRoutes;