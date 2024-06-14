"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStatusCatalog = exports.updateStatusCatalog = exports.createStatusCatalog = exports.getStatusCatalog = exports.listStatusCatalogs = void 0;
const statuscatalog_service_1 = require("./statuscatalog.service"); // Updated import statements
// List all statuscatalogs
const listStatusCatalogs = async (c) => {
    const statusCatalogs = await (0, statuscatalog_service_1.statusCatalogsService)(); // Updated function call
    return c.json(statusCatalogs);
};
exports.listStatusCatalogs = listStatusCatalogs;
// Get a single statuscatalog by ID
const getStatusCatalog = async (c) => {
    const id = Number(c.req.param('id'));
    const statusCatalog = await (0, statuscatalog_service_1.getStatusCatalogService)(id); // Updated function call
    if (statusCatalog) {
        return c.json(statusCatalog);
    }
    else {
        return c.json({ message: 'StatusCatalog not found' }, 404);
    }
};
exports.getStatusCatalog = getStatusCatalog;
// Create a new statuscatalog
const createStatusCatalog = async (c) => {
    const statusCatalog = await c.req.json();
    const message = await (0, statuscatalog_service_1.createStatusCatalogService)(statusCatalog); // Updated function call
    return c.json({ message }, 201);
};
exports.createStatusCatalog = createStatusCatalog;
// Update a statuscatalog
const updateStatusCatalog = async (c) => {
    const id = Number(c.req.param('id'));
    const statusCatalog = await c.req.json();
    const message = await (0, statuscatalog_service_1.updateStatusCatalogService)(id, statusCatalog); // Updated function call
    return c.json({ message });
};
exports.updateStatusCatalog = updateStatusCatalog;
// Delete a statuscatalog
const deleteStatusCatalog = async (c) => {
    const id = Number(c.req.param('id'));
    const message = await (0, statuscatalog_service_1.deleteStatusCatalogService)(id); // Updated function call
    return c.json({ message });
};
exports.deleteStatusCatalog = deleteStatusCatalog;
