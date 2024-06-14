"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderStatusService = exports.updateOrderStatusService = exports.createOrderStatusService = exports.getOrderStatusService = exports.orderStatusesService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const orderStatusesService = async (limit) => {
    if (limit) {
        return await db_1.default.query.OrderStatus.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.OrderStatus.findMany();
};
exports.orderStatusesService = orderStatusesService;
const getOrderStatusService = async (id) => {
    return await db_1.default.query.OrderStatus.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.OrderStatus.id, id)
    });
};
exports.getOrderStatusService = getOrderStatusService;
const createOrderStatusService = async (orderStatus) => {
    await db_1.default.insert(schema_1.OrderStatus).values(orderStatus);
    return "OrderStatus created successfully";
};
exports.createOrderStatusService = createOrderStatusService;
const updateOrderStatusService = async (id, orderStatus) => {
    await db_1.default.update(schema_1.OrderStatus).set(orderStatus).where((0, drizzle_orm_1.eq)(schema_1.OrderStatus.id, id));
    return "OrderStatus updated successfully";
};
exports.updateOrderStatusService = updateOrderStatusService;
const deleteOrderStatusService = async (id) => {
    await db_1.default.delete(schema_1.OrderStatus).where((0, drizzle_orm_1.eq)(schema_1.OrderStatus.id, id));
    return "OrderStatus deleted successfully";
};
exports.deleteOrderStatusService = deleteOrderStatusService;
