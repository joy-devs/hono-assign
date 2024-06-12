import { Hono } from 'hono';
import { listOrderstatusrelations, getOrderstatusrelation, createOrderstatusrelation, updateOrderstatusrelation, deleteOrderstatusrelation } from './orderstatusrelation.controller';
import { zValidator } from '@hono/zod-validator';
import { orderstatusrelationSchema } from '../validator';

export const orderstatusrelationRouter = new Hono();

// Get all orderstatusrelations - api/orderstatusrelations
orderstatusrelationRouter.get('/orderstatusrelations', listOrderstatusrelations);

// Get a single orderstatusrelation - api/orderstatusrelations/:id
orderstatusrelationRouter.get('/orderstatusrelations/:id', getOrderstatusrelation);

// Create an orderstatusrelation
orderstatusrelationRouter.post(
  '/orderstatusrelations',
  zValidator('json', orderstatusrelationSchema, (result, c) => {
    if (!result.success) {
      return c.json(result.error, 400);
    }
  }),
  createOrderstatusrelation
);

// Update an orderstatusrelation - api/orderstatusrelations/:id
orderstatusrelationRouter.put(
  '/orderstatusrelations/:id',
  zValidator('json', orderstatusrelationSchema, (result, c) => {
    if (!result.success) {
      return c.json(result.error, 400);
    }
  }),
  updateOrderstatusrelation
);

// Delete an orderstatusrelation - api/orderstatusrelations/:id
orderstatusrelationRouter.delete('/orderstatusrelations/:id', deleteOrderstatusrelation);
