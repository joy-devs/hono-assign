"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAddressService = exports.updateAddressService = exports.createAddressService = exports.getAddressService = exports.addressesService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const addressesService = async (limit) => {
    if (limit) {
        return await db_1.default.query.Address.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.Address.findMany();
};
exports.addressesService = addressesService;
const getAddressService = async (id) => {
    return await db_1.default.query.Address.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.Address.id, id)
    });
};
exports.getAddressService = getAddressService;
const createAddressService = async (address) => {
    await db_1.default.insert(schema_1.Address).values(address);
    return "Address created successfully";
};
exports.createAddressService = createAddressService;
const updateAddressService = async (id, address) => {
    await db_1.default.update(schema_1.Address).set(address).where((0, drizzle_orm_1.eq)(schema_1.Address.id, id));
    return "Address updated successfully";
};
exports.updateAddressService = updateAddressService;
const deleteAddressService = async (id) => {
    await db_1.default.delete(schema_1.Address).where((0, drizzle_orm_1.eq)(schema_1.Address.id, id));
    return "Address deleted successfully";
};
exports.deleteAddressService = deleteAddressService;
