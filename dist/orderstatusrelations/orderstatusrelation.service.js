"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderStatusRelationService = exports.updateOrderStatusRelationService = exports.createOrderStatusRelationService = exports.getOrderStatusRelationService = exports.orderStatusRelationsService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const orderStatusRelationsService = async (limit) => {
    if (limit) {
        return await db_1.default.query.OrderStatusRelation.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.OrderStatusRelation.findMany();
};
exports.orderStatusRelationsService = orderStatusRelationsService;
const getOrderStatusRelationService = async (id) => {
    return await db_1.default.query.OrderStatusRelation.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.OrderStatusRelation.id, id)
    });
};
exports.getOrderStatusRelationService = getOrderStatusRelationService;
const createOrderStatusRelationService = async (orderStatusRelation) => {
    await db_1.default.insert(schema_1.OrderStatusRelation).values(orderStatusRelation).execute();
    return "OrderStatusRelation created successfully";
};
exports.createOrderStatusRelationService = createOrderStatusRelationService;
const updateOrderStatusRelationService = async (id, orderStatusRelation) => {
    await db_1.default.update(schema_1.OrderStatusRelation).set(orderStatusRelation).where((0, drizzle_orm_1.eq)(schema_1.OrderStatusRelation.id, id)).execute(); // Make sure to execute the query
    return "OrderStatusRelation updated successfully";
};
exports.updateOrderStatusRelationService = updateOrderStatusRelationService;
const deleteOrderStatusRelationService = async (id) => {
    await db_1.default.delete(schema_1.OrderStatusRelation).where((0, drizzle_orm_1.eq)(schema_1.OrderStatusRelation.id, id)).execute(); // Make sure to execute the query
    return "OrderStatusRelation deleted successfully";
};
exports.deleteOrderStatusRelationService = deleteOrderStatusRelationService;
