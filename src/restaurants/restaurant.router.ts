import { Hono } from 'hono';
import { listrestaurants, getRestaurant, createRestaurant, updateRestaurant, deleteRestaurant } from './restaurant.controller';
import { zValidator } from '@hono/zod-validator';
import { restaurantSchema } from '../validator';

export const restaurantRouter = new Hono();

// Get all restaurants - api/restaurants
restaurantRouter.get('/restaurants', listrestaurants);

// Get a single restaurant - api/restaurants/:id
restaurantRouter.get('/restaurants/:id', getRestaurant);

// Create a restaurant
restaurantRouter.post(
  '/restaurants',
  zValidator('json', restaurantSchema, (result, c) => {
    if (!result.success) {
      return c.json(result.error, 400);
    }
  }),
  createRestaurant
);

// Update a restaurant - api/restaurants/:id
restaurantRouter.put(
  '/restaurants/:id',
  zValidator('json', restaurantSchema, (result, c) => {
    if (!result.success) {
      return c.json(result.error, 400);
    }
  }),
  updateRestaurant
);

// Delete a restaurant - api/restaurants/:id
restaurantRouter.delete('/restaurants/:id', deleteRestaurant);
