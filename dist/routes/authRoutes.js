"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
class AuthRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/login', authController_1.authController.login);
        this.router.get('/:id', authController_1.authController.getOne);
        this.router.delete('/:id', authController_1.authController.delete);
        this.router.put('/:id', authController_1.authController.update);
    }
}
const authRoutes = new AuthRoutes();
exports.default = authRoutes.router;
//# sourceMappingURL=authRoutes.js.map