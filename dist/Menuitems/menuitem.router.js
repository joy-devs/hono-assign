"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuItemRouter = void 0;
const hono_1 = require("hono");
const menuitem_controller_1 = require("./menuitem.controller");
const zod_validator_1 = require("@hono/zod-validator");
const validator_1 = require("../validator");
exports.menuItemRouter = new hono_1.Hono();
// Get all menu items - api/menuitems
exports.menuItemRouter.get('/menuitems', menuitem_controller_1.listMenuItems);
// Get a single menu item - api/menuitems/:id
exports.menuItemRouter.get('/menuitems/:id', menuitem_controller_1.getMenuItem);
// Create a menu item
exports.menuItemRouter.post('/menuitems', (0, zod_validator_1.zValidator)('json', validator_1.menuitemSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), menuitem_controller_1.createMenuItem);
// Update a menu item - api/menuitems/:id
exports.menuItemRouter.put('/menuitems/:id', (0, zod_validator_1.zValidator)('json', validator_1.menuitemSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), menuitem_controller_1.updateMenuItem);
// Delete a menu item - api/menuitems/:id
exports.menuItemRouter.delete('/menuitems/:id', menuitem_controller_1.deleteMenuItem);
