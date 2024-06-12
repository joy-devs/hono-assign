import { Hono } from 'hono';
import { listcities, getCity, createCity, updateCity, deleteCity } from './city.controller';
import { zValidator } from '@hono/zod-validator';
import { citySchema } from '../validator';

export const cityRouter = new Hono();

// Get all cities - api/cities
cityRouter.get('/cities', listcities);

// Get a single city - api/users/:id
cityRouter.get('/cities/:id', getCity);

// Create a city
cityRouter.post(
  '/cities',
  zValidator('json', citySchema, (result, c) => {
    if (!result.success) {
      return c.json(result.error, 400);
    }
  }),
  createCity
);

// Update a user - api/users/:id
cityRouter.put(
  '/cities/:id',
  zValidator('json', citySchema, (result, c) => {
    if (!result.success) {
      return c.json(result.error, 400);
    }
  }),
  updateCity
);

// Delete a city - api/citiess/:id
cityRouter.delete('/cities/:id', deleteCity);
