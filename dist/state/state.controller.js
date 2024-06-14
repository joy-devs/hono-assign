"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteState = exports.updateState = exports.createState = exports.getState = exports.listState = void 0;
const state_service_1 = require("./state.service");
// List all state
const listState = async (c) => {
    const state = await (0, state_service_1.stateService)();
    return c.json(state);
};
exports.listState = listState;
// Get a single state by ID
const getState = async (c) => {
    const id = Number(c.req.param('id'));
    const state = await (0, state_service_1.getStateService)(id);
    if (state) {
        return c.json(state);
    }
    else {
        return c.json({ message: 'state not found' }, 404);
    }
};
exports.getState = getState;
// Create a new state
const createState = async (c) => {
    const state = await c.req.json();
    const message = await (0, state_service_1.createStateService)(state);
    return c.json({ message }, 201);
};
exports.createState = createState;
// Update a user
const updateState = async (c) => {
    const id = Number(c.req.param('id'));
    const state = await c.req.json();
    const message = await (0, state_service_1.updateStateService)(id, state);
    return c.json({ message });
};
exports.updateState = updateState;
// Delete a state
const deleteState = async (c) => {
    const id = Number(c.req.param('id'));
    const message = await (0, state_service_1.deleteStateService)(id);
    return c.json({ message });
};
exports.deleteState = deleteState;
