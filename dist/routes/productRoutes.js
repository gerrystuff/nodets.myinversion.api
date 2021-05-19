"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
const JTW_1 = require("../Utilities/JTW");
class ProductRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', [JTW_1.validarJWT], productController_1.productController.list);
        this.router.get('/:id', productController_1.productController.getOne);
        this.router.post('/', productController_1.productController.create);
        this.router.delete('/:id', productController_1.productController.delete);
        this.router.put('/:id', productController_1.productController.update);
    }
}
const productRoutes = new ProductRoutes();
exports.default = productRoutes.router;
//# sourceMappingURL=productRoutes.js.map