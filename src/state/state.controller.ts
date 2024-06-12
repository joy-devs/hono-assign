import { Context } from 'hono';
import { stateService, getStateService, createStateService, updateStateService, deleteStateService } from './state.service';

// List all state
export const listState = async (c: Context) => {
  const state = await stateService();
  return c.json(state);
};

// Get a single state by ID
export const getState = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const state = await getStateService(id);
  if (state) {
    return c.json(state);
  } else {
    return c.json({ message: 'state not found' }, 404);
  }
};

// Create a new state
export const createState = async (c: Context) => {
  const state = await c.req.json();
  const message = await createStateService(state);
  return c.json({ message }, 201);
};

// Update a user
export const updateState = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const state = await c.req.json();
  const message = await updateStateService(id, state);
  return c.json({ message });
};

// Delete a state
export const deleteState = async (c: Context) => {
  const id = Number(c.req.param('id'));
  const message = await deleteStateService(id);
  return c.json({ message });
};
