import { Context } from 'hono';
import { menuItemsService, getMenuItemService, createMenuItemService, updateMenuItemService, deleteMenuItemService } from './menuitem.service';

// List all menu items
export const listMenuItems = async (c: Context) => {
  const menuItems = await menuItemsService();
  return c.json(menuItems);
};

// Get a single menu item by ID
export const getMenuItem = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const menuItem = await getMenuItemService(id);
  if (menuItem) {
    return c.json(menuItem);
  } else {
    return c.json({ message: 'Menu item not found' }, 404);
  }
};

// Create a new menu item
export const createMenuItem = async (c: Context) => {
  const menuItem = await c.req.json();
  const message = await createMenuItemService(menuItem);
  return c.json({ message }, 201);
};

// Update a menu item
export const updateMenuItem = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const menuItem = await c.req.json();
  const message = await updateMenuItemService(id, menuItem);
  return c.json({ message });
};

// Delete a menu item
export const deleteMenuItem = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const message = await deleteMenuItemService(id);
  return c.json({ message });
};
