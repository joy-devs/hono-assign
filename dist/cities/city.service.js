"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCityService = exports.updateCityService = exports.createCityService = exports.getCityService = exports.citiesService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const citiesService = async (limit) => {
    if (limit) {
        return await db_1.default.query.City.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.City.findMany();
};
exports.citiesService = citiesService;
const getCityService = async (id) => {
    return await db_1.default.query.City.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.City.id, id)
    });
};
exports.getCityService = getCityService;
const createCityService = async (city) => {
    await db_1.default.insert(schema_1.City).values(city);
    return "City created successfully";
};
exports.createCityService = createCityService;
const updateCityService = async (id, city) => {
    await db_1.default.update(schema_1.City).set(city).where((0, drizzle_orm_1.eq)(schema_1.City.id, id));
    return "City updated successfully";
};
exports.updateCityService = updateCityService;
const deleteCityService = async (id) => {
    await db_1.default.delete(schema_1.City).where((0, drizzle_orm_1.eq)(schema_1.City.id, id));
    return "City deleted successfully";
};
exports.deleteCityService = deleteCityService;
