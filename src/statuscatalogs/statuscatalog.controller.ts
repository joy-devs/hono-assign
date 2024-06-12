import { Context } from 'hono';
import { statusCatalogsService, getStatusCatalogService, createStatusCatalogService, updateStatusCatalogService, deleteStatusCatalogService } from './statuscatalog.service'; // Updated import statements

// List all statuscatalogs
export const listStatusCatalogs = async (c: Context) => { // Updated function name
  const statusCatalogs = await statusCatalogsService(); // Updated function call
  return c.json(statusCatalogs);
};

// Get a single statuscatalog by ID
export const getStatusCatalog = async (c: Context) => { // Updated function name
  const id = Number(c.req.param('id'));
  const statusCatalog = await getStatusCatalogService(id); // Updated function call
  if (statusCatalog) {
    return c.json(statusCatalog);
  } else {
    return c.json({ message: 'StatusCatalog not found' }, 404);
  }
};

// Create a new statuscatalog
export const createStatusCatalog = async (c: Context) => { // Updated function name
  const statusCatalog = await c.req.json();
  const message = await createStatusCatalogService(statusCatalog); // Updated function call
  return c.json({ message }, 201);
};

// Update a statuscatalog
export const updateStatusCatalog = async (c: Context) => { // Updated function name
  const id = Number(c.req.param('id'));
  const statusCatalog = await c.req.json();
  const message = await updateStatusCatalogService(id, statusCatalog); // Updated function call
  return c.json({ message });
};

// Delete a statuscatalog
export const deleteStatusCatalog = async (c: Context) => { // Updated function name
  const id = Number(c.req.param('id'));
  const message = await deleteStatusCatalogService(id); // Updated function call
  return c.json({ message });
};
