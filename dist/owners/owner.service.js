"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRestaurantOwnerService = exports.updateRestaurantOwnerService = exports.createRestaurantOwnerService = exports.getRestaurantOwnerService = exports.ownersService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const ownersService = async (limit) => {
    if (limit) {
        return await db_1.default.query.RestaurantOwner.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.RestaurantOwner.findMany();
};
exports.ownersService = ownersService;
const getRestaurantOwnerService = async (id) => {
    return await db_1.default.query.RestaurantOwner.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.RestaurantOwner.id, id)
    });
};
exports.getRestaurantOwnerService = getRestaurantOwnerService;
const createRestaurantOwnerService = async (owner) => {
    await db_1.default.insert(schema_1.RestaurantOwner).values(owner);
    return "RestaurantOwner created successfully";
};
exports.createRestaurantOwnerService = createRestaurantOwnerService;
const updateRestaurantOwnerService = async (id, owner) => {
    await db_1.default.update(schema_1.RestaurantOwner).set(owner).where((0, drizzle_orm_1.eq)(schema_1.RestaurantOwner.id, id));
    return "RestaurantOwner updated successfully";
};
exports.updateRestaurantOwnerService = updateRestaurantOwnerService;
const deleteRestaurantOwnerService = async (id) => {
    await db_1.default.delete(schema_1.RestaurantOwner).where((0, drizzle_orm_1.eq)(schema_1.RestaurantOwner.id, id));
    return "RestaurantOnwner deleted successfully";
};
exports.deleteRestaurantOwnerService = deleteRestaurantOwnerService;
