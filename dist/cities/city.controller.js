"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCity = exports.updateCity = exports.createCity = exports.getCity = exports.listcities = void 0;
const city_service_1 = require("./city.service");
// List all cities
const listcities = async (c) => {
    const cities = await (0, city_service_1.citiesService)();
    return c.json(cities);
};
exports.listcities = listcities;
// Get a single city by ID
const getCity = async (c) => {
    const id = Number(c.req.param('id'));
    const city = await (0, city_service_1.getCityService)(id);
    if (city) {
        return c.json(city);
    }
    else {
        return c.json({ message: 'city not found' }, 404);
    }
};
exports.getCity = getCity;
// Create a new city
const createCity = async (c) => {
    const city = await c.req.json();
    const message = await (0, city_service_1.createCityService)(city);
    return c.json({ message }, 201);
};
exports.createCity = createCity;
// Update a city
const updateCity = async (c) => {
    const id = Number(c.req.param('id'));
    const city = await c.req.json();
    const message = await (0, city_service_1.updateCityService)(id, city);
    return c.json({ message });
};
exports.updateCity = updateCity;
// Delete a city
const deleteCity = async (c) => {
    const id = Number(c.req.param('id'));
    const message = await (0, city_service_1.deleteCityService)(id);
    return c.json({ message });
};
exports.deleteCity = deleteCity;
