"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrder = exports.updateOrder = exports.createOrder = exports.getOrder = exports.listOrders = void 0;
const order_service_1 = require("./order.service");
// List all orders
const listOrders = async (c) => {
    const orders = await (0, order_service_1.ordersService)();
    return c.json(orders);
};
exports.listOrders = listOrders;
// Get a single order by ID
const getOrder = async (c) => {
    const id = Number(c.req.param('id'));
    const order = await (0, order_service_1.getOrderService)(id);
    if (order) {
        return c.json(order);
    }
    else {
        return c.json({ message: 'Order not found' }, 404);
    }
};
exports.getOrder = getOrder;
// Create a new order
const createOrder = async (c) => {
    const order = await c.req.json();
    const message = await (0, order_service_1.createOrderService)(order);
    return c.json({ message }, 201);
};
exports.createOrder = createOrder;
// Update an order
const updateOrder = async (c) => {
    const id = Number(c.req.param('id'));
    const order = await c.req.json();
    const message = await (0, order_service_1.updateOrderService)(id, order);
    return c.json({ message });
};
exports.updateOrder = updateOrder;
// Delete an order
const deleteOrder = async (c) => {
    const id = Number(c.req.param('id'));
    const message = await (0, order_service_1.deleteOrderService)(id);
    return c.json({ message });
};
exports.deleteOrder = deleteOrder;
