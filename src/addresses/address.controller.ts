import { Context } from 'hono';
import { addressesService, getAddressService, createAddressService, updateAddressService, deleteAddressService } from './address.service';

// List all addresses
export const listaddresses = async (c: Context) => {
  const addresses = await addressesService();
  return c.json(addresses);
};

// Get a single address by ID
export const getAddress = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const address = await getAddressService(id);
  if (address) {
    return c.json(address);
  } else {
    return c.json({ message: 'Address not found' }, 404);
  }
};

// Create a new address
export const createAddress = async (c: Context) => {
  const address = await c.req.json();
  const message = await createAddressService(address);
  return c.json({ message }, 201);
};

// Update an address
export const updateAddress = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const address = await c.req.json();
  const message = await updateAddressService(id, address);
  return c.json({ message });
};

// Delete an address
export const deleteAddress = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const message = await deleteAddressService(id);
  return c.json({ message });
};
