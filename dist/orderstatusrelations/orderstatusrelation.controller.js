"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderstatusrelation = exports.updateOrderstatusrelation = exports.createOrderstatusrelation = exports.getOrderstatusrelation = exports.listOrderstatusrelations = void 0;
const orderstatusrelation_service_1 = require("./orderstatusrelation.service");
// List all orderstatusrelations
const listOrderstatusrelations = async (c) => {
    const orderstatusrelations = await (0, orderstatusrelation_service_1.orderStatusRelationsService)();
    return c.json(orderstatusrelations);
};
exports.listOrderstatusrelations = listOrderstatusrelations;
// Get a single orderstatusrelation by ID
const getOrderstatusrelation = async (c) => {
    const id = Number(c.req.param('id'));
    const orderstatusrelation = await (0, orderstatusrelation_service_1.getOrderStatusRelationService)(id);
    if (orderstatusrelation) {
        return c.json(orderstatusrelation);
    }
    else {
        return c.json({ message: 'Orderstatusrelation not found' }, 404);
    }
};
exports.getOrderstatusrelation = getOrderstatusrelation;
// Create a new orderstatusrelation
const createOrderstatusrelation = async (c) => {
    const orderstatusrelation = await c.req.json();
    const message = await (0, orderstatusrelation_service_1.createOrderStatusRelationService)(orderstatusrelation);
    return c.json({ message }, 201);
};
exports.createOrderstatusrelation = createOrderstatusrelation;
// Update an orderstatusrelation
const updateOrderstatusrelation = async (c) => {
    const id = Number(c.req.param('id'));
    const orderstatusrelation = await c.req.json();
    const message = await (0, orderstatusrelation_service_1.updateOrderStatusRelationService)(id, orderstatusrelation);
    return c.json({ message });
};
exports.updateOrderstatusrelation = updateOrderstatusrelation;
// Delete an orderstatusrelation
const deleteOrderstatusrelation = async (c) => {
    const id = Number(c.req.param('id'));
    const message = await (0, orderstatusrelation_service_1.deleteOrderStatusRelationService)(id);
    return c.json({ message });
};
exports.deleteOrderstatusrelation = deleteOrderstatusrelation;
