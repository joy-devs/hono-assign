import { Hono } from 'hono';
import { listComments, getComment, createComment, updateComment, deleteComment } from './comment.controller'; // Updated import statements
import { zValidator } from '@hono/zod-validator';
import { commentSchema } from '../validator'; // Updated import statement for validator

export const commentRouter = new Hono(); // Renamed router to commentRouter

// Get all comments 
commentRouter.get('/comments', listComments);

// Get a single comment 
commentRouter.get('/comments/:id', getComment);

// Create a comment 
commentRouter.post(
  '/comments',
  zValidator('json', commentSchema, (result, c) => {
    if (!result.success) {
      return c.json(result.error, 400);
    }
  }),
  createComment
);

// Update a comment - api/comments/:id // Updated route and zValidator schema
commentRouter.put(
  '/comments/:id',
  zValidator('json', commentSchema, (result, c) => {
    if (!result.success) {
      return c.json(result.error, 400);
    }
  }),
  updateComment
);

// Delete a comment - api/comments/:id // Updated route
commentRouter.delete('/comments/:id', deleteComment);
