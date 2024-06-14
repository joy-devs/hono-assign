"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRestaurantService = exports.updateRestaurantService = exports.createRestaurantService = exports.getRestaurantService = exports.restaurantsService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const restaurantsService = async (limit) => {
    if (limit) {
        return await db_1.default.query.Restaurant.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.Restaurant.findMany();
};
exports.restaurantsService = restaurantsService;
const getRestaurantService = async (id) => {
    return await db_1.default.query.Restaurant.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.Restaurant.id, id)
    });
};
exports.getRestaurantService = getRestaurantService;
const createRestaurantService = async (restaurant) => {
    await db_1.default.insert(schema_1.Restaurant).values(restaurant);
    return "Restaurant created successfully";
};
exports.createRestaurantService = createRestaurantService;
const updateRestaurantService = async (id, restaurant) => {
    await db_1.default.update(schema_1.Restaurant).set(restaurant).where((0, drizzle_orm_1.eq)(schema_1.Restaurant.id, id));
    return "Restaurant updated successfully";
};
exports.updateRestaurantService = updateRestaurantService;
const deleteRestaurantService = async (id) => {
    await db_1.default.delete(schema_1.Restaurant).where((0, drizzle_orm_1.eq)(schema_1.Restaurant.id, id));
    return "Restaurant deleted successfully";
};
exports.deleteRestaurantService = deleteRestaurantService;
