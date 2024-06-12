import { Context } from 'hono';
import { orderStatusesService, getOrderStatusService, createOrderStatusService, updateOrderStatusService, deleteOrderStatusService } from './orderstatus.service';

// List all order statuses
export const listOrderStatuses = async (c: Context) => {
  const orderStatuses = await orderStatusesService();
  return c.json(orderStatuses);
};

// Get a single order status by ID
export const getOrderStatus = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const orderStatus = await getOrderStatusService(id);
  if (orderStatus) {
    return c.json(orderStatus);
  } else {
    return c.json({ message: 'Order status not found' }, 404);
  }
};

// Create a new order status
export const createOrderStatus = async (c: Context) => {
  const orderStatus = await c.req.json();
  const message = await createOrderStatusService(orderStatus);
  return c.json({ message }, 201);
};

// Update an order status
export const updateOrderStatus = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const orderStatus = await c.req.json();
  const message = await updateOrderStatusService(id, orderStatus);
  return c.json({ message });
};

// Delete an order status
export const deleteOrderStatus = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const message = await deleteOrderStatusService(id);
  return c.json({ message });
};
