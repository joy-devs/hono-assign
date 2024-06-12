import { Context } from 'hono';
import { categoriesService, getCategoryService, createCategoryService, updateCategoryService, deleteCategoryService } from './category.service';

// List all categories
export const listcategories = async (c: Context) => {
  const categories = await categoriesService();
  return c.json(categories);
};

// Get a single category by ID
export const getCategory = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const category = await getCategoryService(id);
  if (category) {
    return c.json(category);
  } else {
    return c.json({ message: 'Category not found' }, 404);
  }
};

// Create a new category
export const createCategory = async (c: Context) => {
  const category = await c.req.json();
  const message = await createCategoryService(category);
  return c.json({ message }, 201);
};

// Update a category
export const updateCategory = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const category = await c.req.json();
  const message = await updateCategoryService(id, category);
  return c.json({ message });
};

// Delete a category
export const deleteCategory = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const message = await deleteCategoryService(id);
  return c.json({ message });
};
