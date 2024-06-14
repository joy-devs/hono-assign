"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderStatus = exports.updateOrderStatus = exports.createOrderStatus = exports.getOrderStatus = exports.listOrderStatuses = void 0;
const orderstatus_service_1 = require("./orderstatus.service");
// List all order statuses
const listOrderStatuses = async (c) => {
    const orderStatuses = await (0, orderstatus_service_1.orderStatusesService)();
    return c.json(orderStatuses);
};
exports.listOrderStatuses = listOrderStatuses;
// Get a single order status by ID
const getOrderStatus = async (c) => {
    const id = Number(c.req.param('id'));
    const orderStatus = await (0, orderstatus_service_1.getOrderStatusService)(id);
    if (orderStatus) {
        return c.json(orderStatus);
    }
    else {
        return c.json({ message: 'Order status not found' }, 404);
    }
};
exports.getOrderStatus = getOrderStatus;
// Create a new order status
const createOrderStatus = async (c) => {
    const orderStatus = await c.req.json();
    const message = await (0, orderstatus_service_1.createOrderStatusService)(orderStatus);
    return c.json({ message }, 201);
};
exports.createOrderStatus = createOrderStatus;
// Update an order status
const updateOrderStatus = async (c) => {
    const id = Number(c.req.param('id'));
    const orderStatus = await c.req.json();
    const message = await (0, orderstatus_service_1.updateOrderStatusService)(id, orderStatus);
    return c.json({ message });
};
exports.updateOrderStatus = updateOrderStatus;
// Delete an order status
const deleteOrderStatus = async (c) => {
    const id = Number(c.req.param('id'));
    const message = await (0, orderstatus_service_1.deleteOrderStatusService)(id);
    return c.json({ message });
};
exports.deleteOrderStatus = deleteOrderStatus;
