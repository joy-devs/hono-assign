"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderMenuItem = exports.updateOrderMenuItem = exports.createOrderMenuItem = exports.getOrderMenuItem = exports.listOrderMenuItems = void 0;
const ordermenuitem_service_1 = require("./ordermenuitem.service");
// List all order menu items
const listOrderMenuItems = async (c) => {
    const orderMenuItems = await (0, ordermenuitem_service_1.orderMenuItemsService)();
    return c.json(orderMenuItems);
};
exports.listOrderMenuItems = listOrderMenuItems;
// Get a single order menu item by ID
const getOrderMenuItem = async (c) => {
    const id = Number(c.req.param('id'));
    const orderMenuItem = await (0, ordermenuitem_service_1.getOrderMenuItemService)(id);
    if (orderMenuItem) {
        return c.json(orderMenuItem);
    }
    else {
        return c.json({ message: 'Order menu item not found' }, 404);
    }
};
exports.getOrderMenuItem = getOrderMenuItem;
// Create a new order menu item
const createOrderMenuItem = async (c) => {
    const orderMenuItem = await c.req.json();
    const message = await (0, ordermenuitem_service_1.createOrderMenuItemService)(orderMenuItem);
    return c.json({ message }, 201);
};
exports.createOrderMenuItem = createOrderMenuItem;
// Update an order menu item
const updateOrderMenuItem = async (c) => {
    const id = Number(c.req.param('id'));
    const orderMenuItem = await c.req.json();
    const message = await (0, ordermenuitem_service_1.updateOrderMenuItemService)(id, orderMenuItem);
    return c.json({ message });
};
exports.updateOrderMenuItem = updateOrderMenuItem;
// Delete an order menu item
const deleteOrderMenuItem = async (c) => {
    const id = Number(c.req.param('id'));
    const message = await (0, ordermenuitem_service_1.deleteOrderMenuItemService)(id);
    return c.json({ message });
};
exports.deleteOrderMenuItem = deleteOrderMenuItem;
