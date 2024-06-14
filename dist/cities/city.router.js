"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cityRouter = void 0;
const hono_1 = require("hono");
const city_controller_1 = require("./city.controller");
const zod_validator_1 = require("@hono/zod-validator");
const validator_1 = require("../validator");
exports.cityRouter = new hono_1.Hono();
// Get all cities - api/cities
exports.cityRouter.get('/cities', city_controller_1.listcities);
// Get a single city - api/users/:id
exports.cityRouter.get('/cities/:id', city_controller_1.getCity);
// Create a city
exports.cityRouter.post('/cities', (0, zod_validator_1.zValidator)('json', validator_1.citySchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), city_controller_1.createCity);
// Update a user - api/users/:id
exports.cityRouter.put('/cities/:id', (0, zod_validator_1.zValidator)('json', validator_1.citySchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), city_controller_1.updateCity);
// Delete a city - api/citiess/:id
exports.cityRouter.delete('/cities/:id', city_controller_1.deleteCity);
