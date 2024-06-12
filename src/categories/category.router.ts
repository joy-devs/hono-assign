import { Hono } from 'hono';
import { listcategories, getCategory, createCategory, updateCategory, deleteCategory } from './category.controller';
import { zValidator } from '@hono/zod-validator';
import { categorySchema } from '../validator';

export const categoryRouter = new Hono();

// Get all categories - api/categories
categoryRouter.get('/categories', listcategories);

// Get a single category - api/categories/:id
categoryRouter.get('/categories/:id', getCategory);

// Create a category
categoryRouter.post(
  '/categories',
  zValidator('json', categorySchema, (result, c) => {
    if (!result.success) {
      return c.json(result.error, 400);
    }
  }),
  createCategory
);

// Update a category - api/categories/:id
categoryRouter.put(
  '/categories/:id',
  zValidator('json', categorySchema, (result, c) => {
    if (!result.success) {
      return c.json(result.error, 400);
    }
  }),
  updateCategory
);

// Delete a category - api/categories/:id
categoryRouter.delete('/categories/:id', deleteCategory);
