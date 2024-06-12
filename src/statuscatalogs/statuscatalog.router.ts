import { Hono } from 'hono';
import { listStatusCatalogs, getStatusCatalog, createStatusCatalog, updateStatusCatalog, deleteStatusCatalog } from './statuscatalog.controller'; // Updated import statements
import { zValidator } from '@hono/zod-validator';
import { statuscatalogSchema } from '../validator'; // Updated import statement

export const statusCatalogRouter = new Hono(); // Renamed router instance to statusCatalogRouter

// Get all statuscatalogs - api/statuscatalogs
statusCatalogRouter.get('/statuscatalogs', listStatusCatalogs); // Updated route path and handler

// Get a single statuscatalog - api/statuscatalogs/:id
statusCatalogRouter.get('/statuscatalogs/:id', getStatusCatalog); // Updated route path and handler

// Create a statuscatalog
statusCatalogRouter.post(
  '/statuscatalogs',
  zValidator('json', statuscatalogSchema, (result, c) => {
    if (!result.success) {
      return c.json(result.error, 400);
    }
  }),
  createStatusCatalog
);

// Update a statuscatalog - api/statuscatalogs/:id
statusCatalogRouter.put(
  '/statuscatalogs/:id',
  zValidator('json', statuscatalogSchema, (result, c) => {
    if (!result.success) {
      return c.json(result.error, 400);
    }
  }),
  updateStatusCatalog
);

// Delete a statuscatalog - api/statuscatalogs/:id
statusCatalogRouter.delete('/statuscatalogs/:id', deleteStatusCatalog); // Updated route path and handler
