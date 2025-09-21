import { Router } from 'express';
import UserController from '../controllers/userController';

const router = Router();
const userController = new UserController();

const setUserRoutes = (app) => {
    app.use('/api/users', router);
    router.get('/:id', userController.getUser.bind(userController));
    router.put('/:id', userController.updateUser.bind(userController));
};

export default setUserRoutes;