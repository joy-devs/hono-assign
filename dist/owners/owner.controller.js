"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRestaurantOwner = exports.updateRestaurantOwner = exports.createRestaurantOwner = exports.getRestaurantOwner = exports.listowners = void 0;
const owner_service_1 = require("./owner.service");
// List all restaurant owners
const listowners = async (c) => {
    const owners = await (0, owner_service_1.ownersService)();
    return c.json(owners);
};
exports.listowners = listowners;
// Get a single owner by ID
const getRestaurantOwner = async (c) => {
    const id = Number(c.req.param('id'));
    const owner = await (0, owner_service_1.getRestaurantOwnerService)(id);
    if (owner) {
        return c.json(owner);
    }
    else {
        return c.json({ message: 'owner not found' }, 404);
    }
};
exports.getRestaurantOwner = getRestaurantOwner;
// Create a new owner
const createRestaurantOwner = async (c) => {
    const owner = await c.req.json();
    const message = await (0, owner_service_1.createRestaurantOwnerService)(owner);
    return c.json({ message }, 201);
};
exports.createRestaurantOwner = createRestaurantOwner;
// Update an owner
const updateRestaurantOwner = async (c) => {
    const id = Number(c.req.param('id'));
    const owner = await c.req.json();
    const message = await (0, owner_service_1.updateRestaurantOwnerService)(id, owner);
    return c.json({ message });
};
exports.updateRestaurantOwner = updateRestaurantOwner;
// Delete an owner
const deleteRestaurantOwner = async (c) => {
    const id = Number(c.req.param('id'));
    const message = await (0, owner_service_1.deleteRestaurantOwnerService)(id);
    return c.json({ message });
};
exports.deleteRestaurantOwner = deleteRestaurantOwner;
