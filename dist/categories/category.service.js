"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategoryService = exports.updateCategoryService = exports.createCategoryService = exports.getCategoryService = exports.categoriesService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const categoriesService = async (limit) => {
    if (limit) {
        return await db_1.default.query.Category.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.Category.findMany();
};
exports.categoriesService = categoriesService;
const getCategoryService = async (id) => {
    return await db_1.default.query.Category.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.Category.id, id)
    });
};
exports.getCategoryService = getCategoryService;
const createCategoryService = async (category) => {
    await db_1.default.insert(schema_1.Category).values(category);
    return "Category created successfully";
};
exports.createCategoryService = createCategoryService;
const updateCategoryService = async (id, category) => {
    await db_1.default.update(schema_1.Category).set(category).where((0, drizzle_orm_1.eq)(schema_1.Category.id, id));
    return "Category updated successfully";
};
exports.updateCategoryService = updateCategoryService;
const deleteCategoryService = async (id) => {
    await db_1.default.delete(schema_1.Category).where((0, drizzle_orm_1.eq)(schema_1.Category.id, id));
    return "Category deleted successfully";
};
exports.deleteCategoryService = deleteCategoryService;
