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
exports.authController = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_1 = __importDefault(require("../models/user"));
const JTW_1 = require("../Utilities/JTW");
//endpoint
class AuthController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user_name, user_password } = req.body;
            try {
                //verificamos que el usuario exista.
                const user = yield user_1.default.findOne({ where: { user_name: user_name } });
                if (!user) {
                    return res.status(400).json({
                        msg: 'Usuario / Password no son correctos - username'
                    });
                }
                //verificamos contraseña
                const validPassword = bcryptjs_1.default.compareSync(user_password, user.user_password);
                if (!validPassword) {
                    return res.status(400).json({
                        msg: 'Usuario / Password no son correctos - password'
                    });
                }
                //generar el JWT
                const token = yield JTW_1.generarJWT(user.id);
                res.json({
                    user,
                    token
                });
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({
                    msg: 'Hable con el administrador'
                });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.authController = new AuthController();
//# sourceMappingURL=authController.js.map