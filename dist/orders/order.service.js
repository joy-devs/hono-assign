"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderService = exports.updateOrderService = exports.createOrderService = exports.getOrderService = exports.ordersService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const ordersService = async (limit) => {
    if (limit) {
        return await db_1.default.query.Orders.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.Orders.findMany();
};
exports.ordersService = ordersService;
const getOrderService = async (id) => {
    return await db_1.default.query.Orders.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.Orders.id, id)
    });
};
exports.getOrderService = getOrderService;
const createOrderService = async (order) => {
    await db_1.default.insert(schema_1.Orders).values(order);
    return "Order created successfully";
};
exports.createOrderService = createOrderService;
const updateOrderService = async (id, order) => {
    await db_1.default.update(schema_1.Orders).set(order).where((0, drizzle_orm_1.eq)(schema_1.Orders.id, id));
    return "Order updated successfully";
};
exports.updateOrderService = updateOrderService;
const deleteOrderService = async (id) => {
    await db_1.default.delete(schema_1.Orders).where((0, drizzle_orm_1.eq)(schema_1.Orders.id, id));
    return "Order deleted successfully";
};
exports.deleteOrderService = deleteOrderService;
