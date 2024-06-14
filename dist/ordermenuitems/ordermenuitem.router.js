"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderMenuItemRouter = void 0;
const hono_1 = require("hono");
const ordermenuitem_controller_1 = require("./ordermenuitem.controller");
const zod_validator_1 = require("@hono/zod-validator");
const validator_1 = require("../validator");
exports.orderMenuItemRouter = new hono_1.Hono();
// Get all order menu items - api/ordermenuitems
exports.orderMenuItemRouter.get('/ordermenuitems', ordermenuitem_controller_1.listOrderMenuItems);
// Get a single order menu item - api/ordermenuitems/:id
exports.orderMenuItemRouter.get('/ordermenuitems/:id', ordermenuitem_controller_1.getOrderMenuItem);
// Create an order menu item
exports.orderMenuItemRouter.post('/ordermenuitems', (0, zod_validator_1.zValidator)('json', validator_1.ordermenuitemSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), ordermenuitem_controller_1.createOrderMenuItem);
// Update an order menu item - api/ordermenuitems/:id
exports.orderMenuItemRouter.put('/ordermenuitems/:id', (0, zod_validator_1.zValidator)('json', validator_1.ordermenuitemSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), ordermenuitem_controller_1.updateOrderMenuItem);
// Delete an order menu item - api/ordermenuitems/:id
exports.orderMenuItemRouter.delete('/ordermenuitems/:id', ordermenuitem_controller_1.deleteOrderMenuItem);
