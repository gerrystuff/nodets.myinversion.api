import { Router } from 'express';
import { authController } from '../controllers/authController';


class AuthRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/login',authController.login);
        this.router.get('/:id',authController.getOne);
        this.router.delete('/:id',authController.delete);
        this.router.put('/:id',authController.update);

    }
}


const authRoutes = new AuthRoutes();

export default authRoutes.router;
