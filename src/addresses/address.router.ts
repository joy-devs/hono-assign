import { Hono } from 'hono';
import { listaddresses, getAddress, createAddress, updateAddress, deleteAddress } from './address.controller';
import { zValidator } from '@hono/zod-validator';
import { addressSchema } from '../validator';

export const addressRouter = new Hono();

// Get all addresses - api/addresses
addressRouter.get('/addresses', listaddresses);

// Get a single address - api/addresses/:id
addressRouter.get('/addresses/:id', getAddress);

// Create an address
addressRouter.post(
  '/addresses',
  zValidator('json', addressSchema, (result, c) => {
    if (!result.success) {
      return c.json(result.error, 400);
    }
  }),
  createAddress
);

// Update an address - api/addresses/:id
addressRouter.put(
  '/addresses/:id',
  zValidator('json', addressSchema, (result, c) => {
    if (!result.success) {
      return c.json(result.error, 400);
    }
  }),
  updateAddress
);

// Delete an address - api/addresses/:id
addressRouter.delete('/addresses/:id', deleteAddress);
