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
exports.userController = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_1 = __importDefault(require("../models/user"));
//endpoint
class UserController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield user_1.default.findAll();
                const userAuth = {
                    uid: req.user.id,
                    user_name: req.user.user_name
                };
                res.json({ ok: true, users, userAuth });
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
                //check username
                const checkuser = yield user_1.default.findOne({ where: { user_name: body.user_name } });
                if (checkuser) {
                    return res.status(400).json({
                        ok: false,
                        msg: 'Usuario con ese nombre ya existe.'
                    });
                }
                const user = user_1.default.build(body);
                //Encriptacion de contrase??a
                const salt = bcryptjs_1.default.genSaltSync();
                user.user_password = bcryptjs_1.default.hashSync(body.user_password, salt);
                //Crea usuario en la db
                yield user.save();
                res.status(201).json({
                    ok: true,
                    uid: user.id,
                });
            }
            catch (error) {
                res.status(500).json({
                    ok: false,
                    msg: 'No se pudo crear usuario en la db'
                });
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const user = yield user_1.default.findByPk(id);
                if (user) {
                    const userAuth = {
                        uid: req.user.id,
                        user_name: req.user.user_name
                    };
                    res.json({ ok: true, user, userAuth });
                }
                else {
                    res.status(404).json({
                        msg: `el usuario no existe.`
                    });
                }
            }
            catch (error) {
                res.status(500).json({
                    msg: error.parent.sqlMessage
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const user = yield user_1.default.findByPk(id);
                if (!user) {
                    return res.status(404).json({
                        msg: `the user with the id: ${id} does not exist.`
                    });
                }
                yield user.destroy();
                const userAuth = {
                    uid: req.user.id,
                    user_name: req.user.user_name
                };
                res.json({ ok: true, msg: 'user eliminated.', userAuth });
            }
            catch (error) {
                res.status(500).json({
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
                const user = yield user_1.default.findByPk(id);
                if (!user) {
                    return res.status(404).json({
                        msg: `the user with the id: ${id} does not exist.`
                    });
                }
                yield user.update(body);
                const userAuth = {
                    uid: req.user.id,
                    user_name: req.user.user_name
                };
                res.json({ ok: true, msg: 'user updated.', userAuth });
            }
            catch (error) {
                res.status(500).json({
                    msg: error.parent.sqlMessage
                });
            }
        });
    }
}
exports.userController = new UserController();
//# sourceMappingURL=userController.js.map