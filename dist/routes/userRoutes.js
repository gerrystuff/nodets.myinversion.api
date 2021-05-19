"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const JTW_1 = require("../middlewares/JTW");
const FORMVAL_1 = require("../middlewares/FORMVAL");
const express_validator_1 = require("express-validator");
class UserRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', [
            JTW_1.validarJWT
        ], userController_1.userController.list);
        this.router.get('/:id', [
            JTW_1.validarJWT
        ], userController_1.userController.getOne);
        this.router.post('/', [
            express_validator_1.check('user_name', 'El username es obligatorio.').not().isEmpty(),
            express_validator_1.check('user_password', 'El password es obligatorio.').not().isEmpty(),
            FORMVAL_1.validarCampos,
        ], userController_1.userController.create);
        this.router.delete('/:id', [
            JTW_1.validarJWT
        ], userController_1.userController.delete);
        this.router.put('/:id', [
            express_validator_1.check('user_name', 'El username es obligatorio.').not().isEmpty(),
            JTW_1.validarJWT
        ], userController_1.userController.update);
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
//# sourceMappingURL=userRoutes.js.map