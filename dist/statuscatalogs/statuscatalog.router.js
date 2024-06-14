"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusCatalogRouter = void 0;
const hono_1 = require("hono");
const statuscatalog_controller_1 = require("./statuscatalog.controller"); // Updated import statements
const zod_validator_1 = require("@hono/zod-validator");
const validator_1 = require("../validator"); // Updated import statement
exports.statusCatalogRouter = new hono_1.Hono(); // Renamed router instance to statusCatalogRouter
// Get all statuscatalogs - api/statuscatalogs
exports.statusCatalogRouter.get('/statuscatalogs', statuscatalog_controller_1.listStatusCatalogs); // Updated route path and handler
// Get a single statuscatalog - api/statuscatalogs/:id
exports.statusCatalogRouter.get('/statuscatalogs/:id', statuscatalog_controller_1.getStatusCatalog); // Updated route path and handler
// Create a statuscatalog
exports.statusCatalogRouter.post('/statuscatalogs', (0, zod_validator_1.zValidator)('json', validator_1.statuscatalogSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), statuscatalog_controller_1.createStatusCatalog);
// Update a statuscatalog - api/statuscatalogs/:id
exports.statusCatalogRouter.put('/statuscatalogs/:id', (0, zod_validator_1.zValidator)('json', validator_1.statuscatalogSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), statuscatalog_controller_1.updateStatusCatalog);
// Delete a statuscatalog - api/statuscatalogs/:id
exports.statusCatalogRouter.delete('/statuscatalogs/:id', statuscatalog_controller_1.deleteStatusCatalog); // Updated route path and handler
