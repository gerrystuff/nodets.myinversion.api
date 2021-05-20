"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const product_1 = __importDefault(require("../models/product"));
//endpoint
class ProductController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield product_1.default.findAll();
                const userAuthenticated = {
                    uid: req.user.id,
                    user_name: req.user.user_name
                };
                res.json({ products, userAuthenticated });
            }
            catch (error) {
                res.status(500).json({
                    msg: error.parent.sqlMessage
                });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            try {
                const checkproduct = yield product_1.default.findOne({ where: { product_name: body.product_name } });
                if (checkproduct) {
                    return res.status(400).json({
                        ok: false,
                        msg: 'Ya existe un producto con ese nombre.'
                    });
                }
                const product = product_1.default.build(body);
                //Crear producto
                yield product.save();
                res.status(201).json({
                    ok: true,
                    msg: 'Producto creado con exito',
                    product: product
                });
            }
            catch (error) {
                res.status(500).json({
                    ok: false,
                    msg: 'No se creo producto, campos invalidos.'
                });
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const product = yield product_1.default.findByPk(id);
                if (product) {
                    res.json({ ok: true, product });
                }
                else {
                    res.status(404).json({
                        ok: false,
                        msg: `el producto  no existe.`
                    });
                }
            }
            catch (error) {
                res.status(500).json({
                    ok: false,
                    msg: error.parent.sqlMessage
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const product = yield product_1.default.findByPk(id);
                if (!product) {
                    return res.status(404).json({
                        ok: false,
                        msg: `el producto no existe.`
                    });
                }
                yield product.destroy();
                res.json({ ok: true, msg: 'producto eliminado.' });
            }
            catch (error) {
                res.status(500).json({
                    ok: false,
                    msg: error.parent.sqlMessage
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { body } = req;
            try {
                const product = yield product_1.default.findByPk(id);
                if (!product) {
                    return res.status(404).json({
                        ok: false,
                        msg: `el usuario no existe.`
                    });
                }
                yield product.update(body);
                res.json({ ok: true, msg: 'producto acutalizado.', product });
            }
            catch (error) {
                res.status(500).json({
                    ok: false,
                    msg: error.parent.sqlMessage
                });
            }
        });
    }
}
exports.productController = new ProductController();
//# sourceMappingURL=productController.js.map