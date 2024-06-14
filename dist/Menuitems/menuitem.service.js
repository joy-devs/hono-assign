"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMenuItemService = exports.updateMenuItemService = exports.createMenuItemService = exports.getMenuItemService = exports.menuItemsService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const menuItemsService = async (limit) => {
    if (limit) {
        return await db_1.default.query.MenuItem.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.MenuItem.findMany();
};
exports.menuItemsService = menuItemsService;
const getMenuItemService = async (id) => {
    return await db_1.default.query.MenuItem.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.MenuItem.id, id)
    });
};
exports.getMenuItemService = getMenuItemService;
const createMenuItemService = async (menuItem) => {
    await db_1.default.insert(schema_1.MenuItem).values(menuItem);
    return "Menu item created successfully";
};
exports.createMenuItemService = createMenuItemService;
const updateMenuItemService = async (id, menuItem) => {
    await db_1.default.update(schema_1.MenuItem).set(menuItem).where((0, drizzle_orm_1.eq)(schema_1.MenuItem.id, id));
    return "Menu item updated successfully";
};
exports.updateMenuItemService = updateMenuItemService;
const deleteMenuItemService = async (id) => {
    await db_1.default.delete(schema_1.MenuItem).where((0, drizzle_orm_1.eq)(schema_1.MenuItem.id, id));
    return "Menu item deleted successfully";
};
exports.deleteMenuItemService = deleteMenuItemService;
