import { Context } from 'hono';
import { citiesService, getCityService, createCityService, updateCityService, deleteCityService } from './city.service';

// List all cities
export const listcities = async (c: Context) => {
  const cities = await citiesService();
  return c.json(cities);
};

// Get a single city by ID
export const getCity = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const city = await getCityService(id);
  if (city) {
    return c.json(city);
  } else {
    return c.json({ message: 'city not found' }, 404);
  }
};

// Create a new city
export const createCity = async (c: Context) => {
  const city = await c.req.json();
  const message = await createCityService(city);
  return c.json({ message }, 201);
};

// Update a city
export const updateCity = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const city = await c.req.json();
  const message = await updateCityService(id, city);
  return c.json({ message });
};

// Delete a city
export const deleteCity = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const message = await deleteCityService(id);
  return c.json({ message });
};
