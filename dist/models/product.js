"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database/database"));
const Product = database_1.default.define('Product', {
    product_name: {
        type: sequelize_1.DataTypes.STRING
    },
    product_minInvestment: {
        type: sequelize_1.DataTypes.NUMBER
    },
    product_maxInvestment: {
        type: sequelize_1.DataTypes.NUMBER
    },
    product_monthlyRate: {
        type: sequelize_1.DataTypes.NUMBER
    },
    product_planTime: {
        type: sequelize_1.DataTypes.NUMBER
    },
});
exports.default = Product;
//# sourceMappingURL=product.js.map