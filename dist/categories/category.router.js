"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const hono_1 = require("hono");
const category_controller_1 = require("./category.controller");
const zod_validator_1 = require("@hono/zod-validator");
const validator_1 = require("../validator");
exports.categoryRouter = new hono_1.Hono();
// Get all categories - api/categories
exports.categoryRouter.get('/categories', category_controller_1.listcategories);
// Get a single category - api/categories/:id
exports.categoryRouter.get('/categories/:id', category_controller_1.getCategory);
// Create a category
exports.categoryRouter.post('/categories', (0, zod_validator_1.zValidator)('json', validator_1.categorySchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), category_controller_1.createCategory);
// Update a category - api/categories/:id
exports.categoryRouter.put('/categories/:id', (0, zod_validator_1.zValidator)('json', validator_1.categorySchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), category_controller_1.updateCategory);
// Delete a category - api/categories/:id
exports.categoryRouter.delete('/categories/:id', category_controller_1.deleteCategory);
