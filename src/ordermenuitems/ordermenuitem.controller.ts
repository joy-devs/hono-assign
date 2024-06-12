import { Context } from 'hono';
import { orderMenuItemsService, getOrderMenuItemService, createOrderMenuItemService, updateOrderMenuItemService, deleteOrderMenuItemService } from './ordermenuitem.service';

// List all order menu items
export const listOrderMenuItems = async (c: Context) => {
  const orderMenuItems = await orderMenuItemsService();
  return c.json(orderMenuItems);
};

// Get a single order menu item by ID
export const getOrderMenuItem = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const orderMenuItem = await getOrderMenuItemService(id);
  if (orderMenuItem) {
    return c.json(orderMenuItem);
  } else {
    return c.json({ message: 'Order menu item not found' }, 404);
  }
};

// Create a new order menu item
export const createOrderMenuItem = async (c: Context) => {
  const orderMenuItem = await c.req.json();
  const message = await createOrderMenuItemService(orderMenuItem);
  return c.json({ message }, 201);
};

// Update an order menu item
export const updateOrderMenuItem = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const orderMenuItem = await c.req.json();
  const message = await updateOrderMenuItemService(id, orderMenuItem);
  return c.json({ message });
};

// Delete an order menu item
export const deleteOrderMenuItem = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const message = await deleteOrderMenuItemService(id);
  return c.json({ message });
};
