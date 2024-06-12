import { Context } from 'hono';
import { commentsService, getCommentService, createCommentService, updateCommentService, deleteCommentService } from './comment.service';

// List all comments
export const listComments = async (c: Context) => {
  const comments = await commentsService();
  return c.json(comments);
};

// Get a single comment by ID
export const getComment = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const comment = await getCommentService(id);
  if (comment) {
    return c.json(comment);
  } else {
    return c.json({ message: 'Comment not found' }, 404);
  }
};

// Create a new comment
export const createComment = async (c: Context) => {
  const comment = await c.req.json();
  const message = await createCommentService(comment);
  return c.json({ message }, 201);
};

// Update a comment
export const updateComment = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const comment = await c.req.json();
  const message = await updateCommentService(id, comment);
  return c.json({ message });
};

// Delete a comment
export const deleteComment = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const message = await deleteCommentService(id);
  return c.json({ message });
};
