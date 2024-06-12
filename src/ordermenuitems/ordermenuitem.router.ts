import { Hono } from 'hono';
import { listOrderMenuItems, getOrderMenuItem, createOrderMenuItem, updateOrderMenuItem, deleteOrderMenuItem } from './ordermenuitem.controller';
import { zValidator } from '@hono/zod-validator';
import { ordermenuitemSchema } from '../validator';

export const orderMenuItemRouter = new Hono();

// Get all order menu items - api/ordermenuitems
orderMenuItemRouter.get('/ordermenuitems', listOrderMenuItems);

// Get a single order menu item - api/ordermenuitems/:id
orderMenuItemRouter.get('/ordermenuitems/:id', getOrderMenuItem);

// Create an order menu item
orderMenuItemRouter.post(
  '/ordermenuitems',
  zValidator('json', ordermenuitemSchema, (result, c) => {
    if (!result.success) {
      return c.json(result.error, 400);
    }
  }),
  createOrderMenuItem
);

// Update an order menu item - api/ordermenuitems/:id
orderMenuItemRouter.put(
  '/ordermenuitems/:id',
  zValidator('json', ordermenuitemSchema, (result, c) => {
    if (!result.success) {
      return c.json(result.error, 400);
    }
  }),
  updateOrderMenuItem
);

// Delete an order menu item - api/ordermenuitems/:id
orderMenuItemRouter.delete('/ordermenuitems/:id', deleteOrderMenuItem);
