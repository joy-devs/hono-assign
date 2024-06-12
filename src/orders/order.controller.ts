import { Context } from 'hono';
import { ordersService, getOrdersService, createOrdersService, updateOrdersService, deleteOrdersService } from './order.service';

// List all orders
export const listOrders = async (c: Context) => {
  const orders = await ordersService();
  return c.json(orders);
};

// Get a single order by ID
export const getOrder = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const order = await getOrdersService(id);
  if (order) {
    return c.json(order);
  } else {
    return c.json({ message: 'Order not found' }, 404);
  }
};

// Create a new order
export const createOrder = async (c: Context) => {
  const order = await c.req.json();
  const message = await createOrdersService(order);
  return c.json({ message }, 201);
};

// Update an order
export const updateOrder = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const order = await c.req.json();
  const message = await updateOrdersService(id, order);
  return c.json({ message });
};

// Delete an order
export const deleteOrder = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const message = await deleteOrdersService(id);
  return c.json({ message });
};
