import { Hono } from 'hono';
import { listUsers, getUser, createUser, updateUser, deleteUser } from './user.controller';
import { zValidator } from '@hono/zod-validator';
import { userSchema } from '../validator';
import { adminRoleAuth,bothRoleAuth } from '../middleware/bearAuth';

export const userRouter = new Hono();

// Get all users - api/users
userRouter.get('/users', adminRoleAuth,listUsers);

// Get a single user - api/users/:id
userRouter.get('/users/:id',bothRoleAuth, getUser);

// Create a user
userRouter.post(
  '/users',
  zValidator('json', userSchema, (result, c) => {
    if (!result.success) {
      return c.json(result.error, 400);
    }
  }),
  createUser
);

// Update a user - api/users/:id
userRouter.put(
  '/users/:id',
  zValidator('json', userSchema, (result, c) => {
    if (!result.success) {
      return c.json(result.error, 400);
    }
  }),
  updateUser
);

// Delete a user - api/users/:id
userRouter.delete('/users/:id',adminRoleAuth,deleteUser);
