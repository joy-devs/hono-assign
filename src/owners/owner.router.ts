import { Hono } from 'hono';
import { listowners, getRestaurantOwner, createRestaurantOwner, updateRestaurantOwner, deleteRestaurantOwner } from './owner.controller'; // Updated controller functions
import { zValidator } from '@hono/zod-validator';
import { ownerSchema } from '../validator'; // Updated schema for owner

export const ownerRouter = new Hono(); // Renamed router variable

// Get all owners - api/owners
ownerRouter.get('/owners', listowners);

// Get a single owner - api/owners/:id
ownerRouter.get('/owners/:id', getRestaurantOwner);

// Create an owner
ownerRouter.post(
  '/owners',
  zValidator('json', ownerSchema, (result, c) => {
    if (!result.success) {
      return c.json(result.error, 400);
    }
  }),
  createRestaurantOwner
);

// Update an owner - api/owners/:id
ownerRouter.put(
  '/owners/:id',
  zValidator('json', ownerSchema, (result, c) => {
    if (!result.success) {
      return c.json(result.error, 400);
    }
  }),
  updateRestaurantOwner
);

// Delete an owner - api/owners/:id
ownerRouter.delete('/owners/:id', deleteRestaurantOwner);
