"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComment = exports.updateComment = exports.createComment = exports.getComment = exports.listComments = void 0;
const comment_service_1 = require("./comment.service");
// List all comments
const listComments = async (c) => {
    const comments = await (0, comment_service_1.commentsService)();
    return c.json(comments);
};
exports.listComments = listComments;
// Get a single comment by ID
const getComment = async (c) => {
    const id = Number(c.req.param('id'));
    const comment = await (0, comment_service_1.getCommentService)(id);
    if (comment) {
        return c.json(comment);
    }
    else {
        return c.json({ message: 'Comment not found' }, 404);
    }
};
exports.getComment = getComment;
// Create a new comment
const createComment = async (c) => {
    const comment = await c.req.json();
    const message = await (0, comment_service_1.createCommentService)(comment);
    return c.json({ message }, 201);
};
exports.createComment = createComment;
// Update a comment
const updateComment = async (c) => {
    const id = Number(c.req.param('id'));
    const comment = await c.req.json();
    const message = await (0, comment_service_1.updateCommentService)(id, comment);
    return c.json({ message });
};
exports.updateComment = updateComment;
// Delete a comment
const deleteComment = async (c) => {
    const id = Number(c.req.param('id'));
    const message = await (0, comment_service_1.deleteCommentService)(id);
    return c.json({ message });
};
exports.deleteComment = deleteComment;
