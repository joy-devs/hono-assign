import { Hono } from 'hono';
import { listMenuItems, getMenuItem, createMenuItem, updateMenuItem, deleteMenuItem } from './menuitem.controller';
import { zValidator } from '@hono/zod-validator';
import { menuitemSchema } from '../validator';

export const menuItemRouter = new Hono();

// Get all menu items - api/menuitems
menuItemRouter.get('/menuitems', listMenuItems);

// Get a single menu item - api/menuitems/:id
menuItemRouter.get('/menuitems/:id', getMenuItem);

// Create a menu item
menuItemRouter.post(
  '/menuitems',
  zValidator('json', menuitemSchema, (result, c) => {
    if (!result.success) {
      return c.json(result.error, 400);
    }
  }),
  createMenuItem
);

// Update a menu item - api/menuitems/:id
menuItemRouter.put(
  '/menuitems/:id',
  zValidator('json', menuitemSchema, (result, c) => {
    if (!result.success) {
      return c.json(result.error, 400);
    }
  }),
  updateMenuItem
);

// Delete a menu item - api/menuitems/:id
menuItemRouter.delete('/menuitems/:id', deleteMenuItem);
