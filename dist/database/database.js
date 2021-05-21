"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//produccion
const database = new sequelize_1.Sequelize('heroku_caf616ba1ae2085', //database
'b1e7faacb53c5a', //user
'91872644', //password
{
    host: 'us-cdbr-east-03.cleardb.com',
    dialect: 'mysql'
});
//desarrollo
exports.default = database;
//# sourceMappingURL=database.js.map