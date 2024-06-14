"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRestaurant = exports.updateRestaurant = exports.createRestaurant = exports.getRestaurant = exports.listrestaurants = void 0;
const restaurant_service_1 = require("./restaurant.service");
// List all users
const listrestaurants = async (c) => {
    const restaurants = await (0, restaurant_service_1.restaurantsService)();
    return c.json(restaurants);
};
exports.listrestaurants = listrestaurants;
// Get a single user by ID
const getRestaurant = async (c) => {
    const id = Number(c.req.param('id'));
    const restaurant = await (0, restaurant_service_1.getRestaurantService)(id);
    if (restaurant) {
        return c.json(restaurant);
    }
    else {
        return c.json({ message: 'restaurant not found' }, 404);
    }
};
exports.getRestaurant = getRestaurant;
// Create a new user
const createRestaurant = async (c) => {
    const restaurant = await c.req.json();
    const message = await (0, restaurant_service_1.createRestaurantService)(restaurant);
    return c.json({ message }, 201);
};
exports.createRestaurant = createRestaurant;
// Update a user
const updateRestaurant = async (c) => {
    const id = Number(c.req.param('id'));
    const restaurant = await c.req.json();
    const message = await (0, restaurant_service_1.updateRestaurantService)(id, restaurant);
    return c.json({ message });
};
exports.updateRestaurant = updateRestaurant;
// Delete a user
const deleteRestaurant = async (c) => {
    const id = Number(c.req.param('id'));
    const message = await (0, restaurant_service_1.deleteRestaurantService)(id);
    return c.json({ message });
};
exports.deleteRestaurant = deleteRestaurant;
