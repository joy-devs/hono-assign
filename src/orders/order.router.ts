import { Hono } from 'hono';
import { listOrders, getOrder, createOrder, updateOrder, deleteOrder } from './order.controller';
import { zValidator } from '@hono/zod-validator';
import { orderSchema } from '../validator';

export const orderRouter = new Hono();

// Get all orders - api/orders
orderRouter.get('/orders', listOrders);

// Get a single order - api/orders/:id
orderRouter.get('/orders/:id', getOrder);

// Create an order
orderRouter.post(
  '/orders',
  zValidator('json', orderSchema, (result, c) => {
    if (!result.success) {
      return c.json(result.error, 400);
    }
  }),
  createOrder
);

// Update an order - api/orders/:id
orderRouter.put(
  '/orders/:id',
  zValidator('json', orderSchema, (result, c) => {
    if (!result.success) {
      return c.json(result.error, 400);
    }
  }),
  updateOrder
);

// Delete an order - api/orders/:id
orderRouter.delete('/orders/:id', deleteOrder);
