"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const keys = new sequelize_1.Sequelize('myinversion', 'root', 'Redcode010', {
    host: 'localhost',
    dialect: 'mysql',
    //loggin: false
});
exports.default = keys;
//# sourceMappingURL=keys.js.map