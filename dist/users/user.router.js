"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const hono_1 = require("hono");
const user_controller_1 = require("./user.controller");
const zod_validator_1 = require("@hono/zod-validator");
const validator_1 = require("../validator");
const bearAuth_1 = require("../middleware/bearAuth");
exports.userRouter = new hono_1.Hono();
// Get all users - api/users
exports.userRouter.get('/users', bearAuth_1.adminRoleAuth, user_controller_1.listUsers);
// Get a single user - api/users/:id
exports.userRouter.get('/users/:id', bearAuth_1.bothRoleAuth, user_controller_1.getUser);
// Create a user
exports.userRouter.post('/users', (0, zod_validator_1.zValidator)('json', validator_1.userSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), user_controller_1.createUser);
// Update a user - api/users/:id
exports.userRouter.put('/users/:id', (0, zod_validator_1.zValidator)('json', validator_1.userSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), user_controller_1.updateUser);
// Delete a user - api/users/:id
exports.userRouter.delete('/users/:id', bearAuth_1.adminRoleAuth, user_controller_1.deleteUser);
