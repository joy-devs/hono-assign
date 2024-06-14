"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.getCategory = exports.listcategories = void 0;
const category_service_1 = require("./category.service");
// List all categories
const listcategories = async (c) => {
    const categories = await (0, category_service_1.categoriesService)();
    return c.json(categories);
};
exports.listcategories = listcategories;
// Get a single category by ID
const getCategory = async (c) => {
    const id = Number(c.req.param('id'));
    const category = await (0, category_service_1.getCategoryService)(id);
    if (category) {
        return c.json(category);
    }
    else {
        return c.json({ message: 'Category not found' }, 404);
    }
};
exports.getCategory = getCategory;
// Create a new category
const createCategory = async (c) => {
    const category = await c.req.json();
    const message = await (0, category_service_1.createCategoryService)(category);
    return c.json({ message }, 201);
};
exports.createCategory = createCategory;
// Update a category
const updateCategory = async (c) => {
    const id = Number(c.req.param('id'));
    const category = await c.req.json();
    const message = await (0, category_service_1.updateCategoryService)(id, category);
    return c.json({ message });
};
exports.updateCategory = updateCategory;
// Delete a category
const deleteCategory = async (c) => {
    const id = Number(c.req.param('id'));
    const message = await (0, category_service_1.deleteCategoryService)(id);
    return c.json({ message });
};
exports.deleteCategory = deleteCategory;
