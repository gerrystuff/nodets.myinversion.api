import { Router } from 'express';
import { userController } from '../controllers/userController';
import { validarJWT  } from '../Utilities/JTW';



class UserRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/',[validarJWT],userController.list);
        this.router.get('/:id',userController.getOne);
        this.router.post('/',userController.create);
        this.router.delete('/:id',
        [validarJWT],
        userController.delete);
        this.router.put('/:id',userController.update);

    }
}


const userRoutes = new UserRoutes();

export default userRoutes.router;
