import { Context } from 'hono';
import { orderStatusRelationsService, getOrderStatusRelationService, createOrderStatusRelationService, updateOrderStatusRelationService, deleteOrderStatusRelationService } from './orderstatusrelation.service';

// List all orderstatusrelations
export const listOrderstatusrelations = async (c: Context) => {
  const orderstatusrelations = await orderStatusRelationsService();
  return c.json(orderstatusrelations);
};

// Get a single orderstatusrelation by ID
export const getOrderstatusrelation = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const orderstatusrelation = await getOrderStatusRelationService(id);
  if (orderstatusrelation) {
    return c.json(orderstatusrelation);
  } else {
    return c.json({ message: 'Orderstatusrelation not found' }, 404);
  }
};

// Create a new orderstatusrelation
export const createOrderstatusrelation = async (c: Context) => {
  const orderstatusrelation = await c.req.json();
  const message = await createOrderStatusRelationService(orderstatusrelation);
  return c.json({ message }, 201);
};

// Update an orderstatusrelation
export const updateOrderstatusrelation = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const orderstatusrelation = await c.req.json();
  const message = await updateOrderStatusRelationService(id, orderstatusrelation);
  return c.json({ message });
};

// Delete an orderstatusrelation
export const deleteOrderstatusrelation = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const message = await deleteOrderStatusRelationService(id);
  return c.json({ message });
};
