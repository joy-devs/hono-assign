"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.listUsers = void 0;
const user_service_1 = require("./user.service");
// List all users
const listUsers = async (c) => {
    const users = await (0, user_service_1.usersService)();
    return c.json(users);
};
exports.listUsers = listUsers;
// Get a single user by ID
const getUser = async (c) => {
    const id = Number(c.req.param('id'));
    const user = await (0, user_service_1.getUserService)(id);
    if (user) {
        return c.json(user);
    }
    else {
        return c.json({ message: 'User not found' }, 404);
    }
};
exports.getUser = getUser;
// Create a new user
const createUser = async (c) => {
    const user = await c.req.json();
    const message = await (0, user_service_1.createUserService)(user);
    return c.json({ message }, 201);
};
exports.createUser = createUser;
// Update a user
const updateUser = async (c) => {
    const id = Number(c.req.param('id'));
    const user = await c.req.json();
    const message = await (0, user_service_1.updateUserService)(id, user);
    return c.json({ message });
};
exports.updateUser = updateUser;
// Delete a user
const deleteUser = async (c) => {
    const id = Number(c.req.param('id'));
    const message = await (0, user_service_1.deleteUserService)(id);
    return c.json({ message });
};
exports.deleteUser = deleteUser;
