"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderStatusRouter = void 0;
const hono_1 = require("hono");
const orderstatus_controller_1 = require("./orderstatus.controller");
const zod_validator_1 = require("@hono/zod-validator");
const validator_1 = require("../validator");
exports.orderStatusRouter = new hono_1.Hono();
// Get all order statuses - api/orderstatuses
exports.orderStatusRouter.get('/orderstatuses', orderstatus_controller_1.listOrderStatuses);
// Get a single order status - api/orderstatuses/:id
exports.orderStatusRouter.get('/orderstatuses/:id', orderstatus_controller_1.getOrderStatus);
// Create an order status
exports.orderStatusRouter.post('/orderstatuses', (0, zod_validator_1.zValidator)('json', validator_1.orderstatusSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), orderstatus_controller_1.createOrderStatus);
// Update an order status - api/orderstatuses/:id
exports.orderStatusRouter.put('/orderstatuses/:id', (0, zod_validator_1.zValidator)('json', validator_1.orderstatusSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), orderstatus_controller_1.updateOrderStatus);
// Delete an order status - api/orderstatuses/:id
exports.orderStatusRouter.delete('/orderstatuses/:id', orderstatus_controller_1.deleteOrderStatus);
