"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStatusCatalogService = exports.updateStatusCatalogService = exports.createStatusCatalogService = exports.getStatusCatalogService = exports.statusCatalogsService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema"); // Updated import statement for StatusCatalog entity
const statusCatalogsService = async (limit) => {
    if (limit) {
        return await db_1.default.query.StatusCatalog.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.StatusCatalog.findMany(); // Updated query to use StatusCatalog entity
};
exports.statusCatalogsService = statusCatalogsService;
const getStatusCatalogService = async (id) => {
    return await db_1.default.query.StatusCatalog.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.StatusCatalog.id, id) // Updated condition to use StatusCatalog entity
    });
};
exports.getStatusCatalogService = getStatusCatalogService;
const createStatusCatalogService = async (statusCatalog) => {
    await db_1.default.insert(schema_1.StatusCatalog).values(statusCatalog).execute(); // Updated query to use StatusCatalog entity and executed it
    return "StatusCatalog created successfully"; // Updated success message
};
exports.createStatusCatalogService = createStatusCatalogService;
const updateStatusCatalogService = async (id, statusCatalog) => {
    await db_1.default.update(schema_1.StatusCatalog).set(statusCatalog).where((0, drizzle_orm_1.eq)(schema_1.StatusCatalog.id, id)).execute(); // Updated query to use StatusCatalog entity, executed it, and updated condition
    return "StatusCatalog updated successfully"; // Updated success message
};
exports.updateStatusCatalogService = updateStatusCatalogService;
const deleteStatusCatalogService = async (id) => {
    await db_1.default.delete(schema_1.StatusCatalog).where((0, drizzle_orm_1.eq)(schema_1.StatusCatalog.id, id)).execute(); // Updated query to use StatusCatalog entity, executed it, and updated condition
    return "StatusCatalog deleted successfully"; // Updated success message
};
exports.deleteStatusCatalogService = deleteStatusCatalogService;
