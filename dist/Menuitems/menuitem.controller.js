"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMenuItem = exports.updateMenuItem = exports.createMenuItem = exports.getMenuItem = exports.listMenuItems = void 0;
const menuitem_service_1 = require("./menuitem.service");
// List all menu items
const listMenuItems = async (c) => {
    const menuItems = await (0, menuitem_service_1.menuItemsService)();
    return c.json(menuItems);
};
exports.listMenuItems = listMenuItems;
// Get a single menu item by ID
const getMenuItem = async (c) => {
    const id = Number(c.req.param('id'));
    const menuItem = await (0, menuitem_service_1.getMenuItemService)(id);
    if (menuItem) {
        return c.json(menuItem);
    }
    else {
        return c.json({ message: 'Menu item not found' }, 404);
    }
};
exports.getMenuItem = getMenuItem;
// Create a new menu item
const createMenuItem = async (c) => {
    const menuItem = await c.req.json();
    const message = await (0, menuitem_service_1.createMenuItemService)(menuItem);
    return c.json({ message }, 201);
};
exports.createMenuItem = createMenuItem;
// Update a menu item
const updateMenuItem = async (c) => {
    const id = Number(c.req.param('id'));
    const menuItem = await c.req.json();
    const message = await (0, menuitem_service_1.updateMenuItemService)(id, menuItem);
    return c.json({ message });
};
exports.updateMenuItem = updateMenuItem;
// Delete a menu item
const deleteMenuItem = async (c) => {
    const id = Number(c.req.param('id'));
    const message = await (0, menuitem_service_1.deleteMenuItemService)(id);
    return c.json({ message });
};
exports.deleteMenuItem = deleteMenuItem;
