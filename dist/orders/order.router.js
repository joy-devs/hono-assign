"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const hono_1 = require("hono");
const order_controller_1 = require("./order.controller");
const zod_validator_1 = require("@hono/zod-validator");
const validator_1 = require("../validator");
exports.orderRouter = new hono_1.Hono();
// Get all orders - api/orders
exports.orderRouter.get('/orders', order_controller_1.listOrders);
// Get a single order - api/orders/:id
exports.orderRouter.get('/orders/:id', order_controller_1.getOrder);
// Create an order
exports.orderRouter.post('/orders', (0, zod_validator_1.zValidator)('json', validator_1.orderSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), order_controller_1.createOrder);
// Update an order - api/orders/:id
exports.orderRouter.put('/orders/:id', (0, zod_validator_1.zValidator)('json', validator_1.orderSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), order_controller_1.updateOrder);
// Delete an order - api/orders/:id
exports.orderRouter.delete('/orders/:id', order_controller_1.deleteOrder);
