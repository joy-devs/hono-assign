"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderstatusrelationRouter = void 0;
const hono_1 = require("hono");
const orderstatusrelation_controller_1 = require("./orderstatusrelation.controller");
const zod_validator_1 = require("@hono/zod-validator");
const validator_1 = require("../validator");
exports.orderstatusrelationRouter = new hono_1.Hono();
// Get all orderstatusrelations - api/orderstatusrelations
exports.orderstatusrelationRouter.get('/orderstatusrelations', orderstatusrelation_controller_1.listOrderstatusrelations);
// Get a single orderstatusrelation - api/orderstatusrelations/:id
exports.orderstatusrelationRouter.get('/orderstatusrelations/:id', orderstatusrelation_controller_1.getOrderstatusrelation);
// Create an orderstatusrelation
exports.orderstatusrelationRouter.post('/orderstatusrelations', (0, zod_validator_1.zValidator)('json', validator_1.orderstatusrelationSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), orderstatusrelation_controller_1.createOrderstatusrelation);
// Update an orderstatusrelation - api/orderstatusrelations/:id
exports.orderstatusrelationRouter.put('/orderstatusrelations/:id', (0, zod_validator_1.zValidator)('json', validator_1.orderstatusrelationSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), orderstatusrelation_controller_1.updateOrderstatusrelation);
// Delete an orderstatusrelation - api/orderstatusrelations/:id
exports.orderstatusrelationRouter.delete('/orderstatusrelations/:id', orderstatusrelation_controller_1.deleteOrderstatusrelation);
