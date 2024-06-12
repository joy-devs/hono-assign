import { Hono } from 'hono';
import { listState, getState, createState, updateState, deleteState } from './state.controller';
import { zValidator } from '@hono/zod-validator';
import { stateSchema } from '../validator';

export const stateRouter = new Hono();

// Get all state - api/state
stateRouter.get('/state', listState);

// Get a single state - api/state/:id
stateRouter.get('/state:id', getState);

// Create a state
stateRouter.post(
  '/state',
  zValidator('json', stateSchema, (result, c) => {
    if (!result.success) {
      return c.json(result.error, 400);
    }
  }),
  createState
);

// Update a user - api/users/:id
stateRouter.put(
  '/state/:id',
  zValidator('json', stateSchema, (result, c) => {
    if (!result.success) {
      return c.json(result.error, 400);
    }
  }),
  updateState
);

// Delete a user - api/users/:id
stateRouter.delete('/state/:id', deleteState);
