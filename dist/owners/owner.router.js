"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ownerRouter = void 0;
const hono_1 = require("hono");
const owner_controller_1 = require("./owner.controller"); // Updated controller functions
const zod_validator_1 = require("@hono/zod-validator");
const validator_1 = require("../validator"); // Updated schema for owner
exports.ownerRouter = new hono_1.Hono(); // Renamed router variable
// Get all owners - api/owners
exports.ownerRouter.get('/owners', owner_controller_1.listowners);
// Get a single owner - api/owners/:id
exports.ownerRouter.get('/owners/:id', owner_controller_1.getRestaurantOwner);
// Create an owner
exports.ownerRouter.post('/owners', (0, zod_validator_1.zValidator)('json', validator_1.ownerSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), owner_controller_1.createRestaurantOwner);
// Update an owner - api/owners/:id
exports.ownerRouter.put('/owners/:id', (0, zod_validator_1.zValidator)('json', validator_1.ownerSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), owner_controller_1.updateRestaurantOwner);
// Delete an owner - api/owners/:id
exports.ownerRouter.delete('/owners/:id', owner_controller_1.deleteRestaurantOwner);
