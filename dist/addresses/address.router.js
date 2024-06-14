"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressRouter = void 0;
const hono_1 = require("hono");
const address_controller_1 = require("./address.controller");
const zod_validator_1 = require("@hono/zod-validator");
const validator_1 = require("../validator");
exports.addressRouter = new hono_1.Hono();
// Get all addresses - api/addresses
exports.addressRouter.get('/addresses', address_controller_1.listaddresses);
// Get a single address - api/addresses/:id
exports.addressRouter.get('/addresses/:id', address_controller_1.getAddress);
// Create an address
exports.addressRouter.post('/addresses', (0, zod_validator_1.zValidator)('json', validator_1.addressSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), address_controller_1.createAddress);
// Update an address - api/addresses/:id
exports.addressRouter.put('/addresses/:id', (0, zod_validator_1.zValidator)('json', validator_1.addressSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), address_controller_1.updateAddress);
// Delete an address - api/addresses/:id
exports.addressRouter.delete('/addresses/:id', address_controller_1.deleteAddress);
