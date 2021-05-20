"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//produccion
// const database = new Sequelize(
//     'heroku_caf616ba1ae2085', //database
//     'b1e7faacb53c5a', //user
//     '91872644', //password
//         {
//             host: 'us-cdbr-east-03.cleardb.com', //host
//             dialect: 'mysql'        }
//     );
//desarrollo
const database = new sequelize_1.Sequelize('myinversion', //database
'root', //user
'Redcode010', //password
{
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = database;
//# sourceMappingURL=database.js.map