import { Context } from 'hono';
import { ownersService, getRestaurantOwnerService, createRestaurantOwnerService, updateRestaurantOwnerService, deleteRestaurantOwnerService } from './owner.service';

// List all restaurant owners
export const listowners = async (c: Context) => {
  const owners = await ownersService();
  return c.json(owners);
};

// Get a single owner by ID
export const getRestaurantOwner = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const owner = await getRestaurantOwnerService(id);
  if (owner) {
    return c.json(owner);
  } else {
    return c.json({ message: 'owner not found' }, 404);
  }
};

// Create a new owner
export const createRestaurantOwner = async (c: Context) => {
  const owner = await c.req.json();
  const message = await createRestaurantOwnerService(owner);
  return c.json({ message }, 201);
};

// Update an owner
export const updateRestaurantOwner = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const owner = await c.req.json();
  const message = await updateRestaurantOwnerService(id, owner);
  return c.json({ message });
};

// Delete an owner
export const deleteRestaurantOwner = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const message = await deleteRestaurantOwnerService(id);
  return c.json({ message });
};
