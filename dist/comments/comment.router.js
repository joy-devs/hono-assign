"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentRouter = void 0;
const hono_1 = require("hono");
const comment_controller_1 = require("./comment.controller"); // Updated import statements
const zod_validator_1 = require("@hono/zod-validator");
const validator_1 = require("../validator"); // Updated import statement for validator
exports.commentRouter = new hono_1.Hono(); // Renamed router to commentRouter
// Get all comments 
exports.commentRouter.get('/comments', comment_controller_1.listComments);
// Get a single comment 
exports.commentRouter.get('/comments/:id', comment_controller_1.getComment);
// Create a comment 
exports.commentRouter.post('/comments', (0, zod_validator_1.zValidator)('json', validator_1.commentSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), comment_controller_1.createComment);
// Update a comment - api/comments/:id // Updated route and zValidator schema
exports.commentRouter.put('/comments/:id', (0, zod_validator_1.zValidator)('json', validator_1.commentSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), comment_controller_1.updateComment);
// Delete a comment - api/comments/:id // Updated route
exports.commentRouter.delete('/comments/:id', comment_controller_1.deleteComment);
