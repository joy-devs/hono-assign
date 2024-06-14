"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStateService = exports.updateStateService = exports.createStateService = exports.getStateService = exports.stateService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const stateService = async (limit) => {
    if (limit) {
        return await db_1.default.query.State.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.State.findMany();
};
exports.stateService = stateService;
const getStateService = async (id) => {
    return await db_1.default.query.State.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.State.id, id)
    });
};
exports.getStateService = getStateService;
const createStateService = async (state) => {
    await db_1.default.insert(schema_1.State).values(state);
    return "User created successfully";
};
exports.createStateService = createStateService;
const updateStateService = async (id, state) => {
    await db_1.default.update(schema_1.State).set(state).where((0, drizzle_orm_1.eq)(schema_1.State.id, id));
    return "User updated successfully";
};
exports.updateStateService = updateStateService;
const deleteStateService = async (id) => {
    await db_1.default.delete(schema_1.State).where((0, drizzle_orm_1.eq)(schema_1.State.id, id));
    return "State deleted successfully";
};
exports.deleteStateService = deleteStateService;
