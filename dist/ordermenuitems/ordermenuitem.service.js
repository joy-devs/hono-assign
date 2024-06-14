"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderMenuItemService = exports.updateOrderMenuItemService = exports.createOrderMenuItemService = exports.getOrderMenuItemService = exports.orderMenuItemsService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const orderMenuItemsService = async (limit) => {
    if (limit) {
        return await db_1.default.query.OrderMenuItem.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.OrderMenuItem.findMany();
};
exports.orderMenuItemsService = orderMenuItemsService;
const getOrderMenuItemService = async (id) => {
    return await db_1.default.query.OrderMenuItem.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.OrderMenuItem.id, id)
    });
};
exports.getOrderMenuItemService = getOrderMenuItemService;
const createOrderMenuItemService = async (orderMenuItem) => {
    await db_1.default.insert(schema_1.OrderMenuItem).values(orderMenuItem).execute(); // Make sure to execute the query
    return "OrderMenuItem created successfully";
};
exports.createOrderMenuItemService = createOrderMenuItemService;
const updateOrderMenuItemService = async (id, orderMenuItem) => {
    await db_1.default.update(schema_1.OrderMenuItem).set(orderMenuItem).where((0, drizzle_orm_1.eq)(schema_1.OrderMenuItem.id, id)).execute(); // Make sure to execute the query
    return "OrderMenuItem updated successfully";
};
exports.updateOrderMenuItemService = updateOrderMenuItemService;
const deleteOrderMenuItemService = async (id) => {
    await db_1.default.delete(schema_1.OrderMenuItem).where((0, drizzle_orm_1.eq)(schema_1.OrderMenuItem.id, id)).execute(); // Make sure to execute the query
    return "OrderMenuItem deleted successfully";
};
exports.deleteOrderMenuItemService = deleteOrderMenuItemService;
