import { Context } from 'hono';
import { usersService, getUserService, createUserService, updateUserService, deleteUserService } from './user.service';

// List all users
export const listUsers = async (c: Context) => {
  const users = await usersService();
  return c.json(users);
};

// Get a single user by ID
export const getUser = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const user = await getUserService(id);
  if (user) {
    return c.json(user);
  } else {
    return c.json({ message: 'User not found' }, 404);
  }
};

// Create a new user
export const createUser = async (c: Context) => {
  const user = await c.req.json();
  const message = await createUserService(user);
  return c.json({ message }, 201);
};

// Update a user
export const updateUser = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const user = await c.req.json();
  const message = await updateUserService(id, user);
  return c.json({ message });
};

// Delete a user
export const deleteUser = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const message = await deleteUserService(id);
  return c.json({ message });
};
