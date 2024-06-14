"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateRouter = void 0;
const hono_1 = require("hono");
const state_controller_1 = require("./state.controller");
const zod_validator_1 = require("@hono/zod-validator");
const validator_1 = require("../validator");
exports.stateRouter = new hono_1.Hono();
// Get all state - api/state
exports.stateRouter.get('/state', state_controller_1.listState);
// Get a single state - api/state/:id
exports.stateRouter.get('/state:id', state_controller_1.getState);
// Create a state
exports.stateRouter.post('/state', (0, zod_validator_1.zValidator)('json', validator_1.stateSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), state_controller_1.createState);
// Update a user - api/users/:id
exports.stateRouter.put('/state/:id', (0, zod_validator_1.zValidator)('json', validator_1.stateSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), state_controller_1.updateState);
// Delete a user - api/users/:id
exports.stateRouter.delete('/state/:id', state_controller_1.deleteState);
