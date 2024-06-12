import { Hono } from 'hono';
import { listOrderStatuses, getOrderStatus, createOrderStatus, updateOrderStatus, deleteOrderStatus } from './orderstatus.controller';
import { zValidator } from '@hono/zod-validator';
import { orderstatusSchema } from '../validator';

export const orderStatusRouter = new Hono();

// Get all order statuses - api/orderstatuses
orderStatusRouter.get('/orderstatuses', listOrderStatuses);

// Get a single order status - api/orderstatuses/:id
orderStatusRouter.get('/orderstatuses/:id', getOrderStatus);

// Create an order status
orderStatusRouter.post(
  '/orderstatuses',
  zValidator('json', orderstatusSchema, (result, c) => {
    if (!result.success) {
      return c.json(result.error, 400);
    }
  }),
  createOrderStatus
);

// Update an order status - api/orderstatuses/:id
orderStatusRouter.put(
  '/orderstatuses/:id',
  zValidator('json', orderstatusSchema, (result, c) => {
    if (!result.success) {
      return c.json(result.error, 400);
    }
  }),
  updateOrderStatus
);

// Delete an order status - api/orderstatuses/:id
orderStatusRouter.delete('/orderstatuses/:id', deleteOrderStatus);
