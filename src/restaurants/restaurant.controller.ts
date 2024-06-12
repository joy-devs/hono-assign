import { Context } from 'hono';
import { restaurantsService, getRestaurantService, createRestaurantService, updateRestaurantService, deleteRestaurantService } from './restaurant.service';

// List all users
export const listrestaurants = async (c: Context) => {
  const restaurants = await restaurantsService();
  return c.json(restaurants);
};

// Get a single user by ID
export const getRestaurant = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const restaurant = await getRestaurantService(id);
  if (restaurant) {
    return c.json(restaurant);
  } else {
    return c.json({ message: 'restaurant not found' }, 404);
  }
};

// Create a new user
export const createRestaurant = async (c: Context) => {
  const restaurant = await c.req.json();
  const message = await createRestaurantService(restaurant);
  return c.json({ message }, 201);
};

// Update a user
export const updateRestaurant= async (c: Context) => {
  const id = Number(c.req.param('id'));
  const restaurant = await c.req.json();
  const message = await updateRestaurantService(id, restaurant);
  return c.json({ message });
};

// Delete a user
export const deleteRestaurant = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const message = await deleteRestaurantService(id);
  return c.json({ message });
};
