"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAddress = exports.updateAddress = exports.createAddress = exports.getAddress = exports.listaddresses = void 0;
const address_service_1 = require("./address.service");
// List all addresses
const listaddresses = async (c) => {
    const addresses = await (0, address_service_1.addressesService)();
    return c.json(addresses);
};
exports.listaddresses = listaddresses;
// Get a single address by ID
const getAddress = async (c) => {
    const id = Number(c.req.param('id'));
    const address = await (0, address_service_1.getAddressService)(id);
    if (address) {
        return c.json(address);
    }
    else {
        return c.json({ message: 'Address not found' }, 404);
    }
};
exports.getAddress = getAddress;
// Create a new address
const createAddress = async (c) => {
    const address = await c.req.json();
    const message = await (0, address_service_1.createAddressService)(address);
    return c.json({ message }, 201);
};
exports.createAddress = createAddress;
// Update an address
const updateAddress = async (c) => {
    const id = Number(c.req.param('id'));
    const address = await c.req.json();
    const message = await (0, address_service_1.updateAddressService)(id, address);
    return c.json({ message });
};
exports.updateAddress = updateAddress;
// Delete an address
const deleteAddress = async (c) => {
    const id = Number(c.req.param('id'));
    const message = await (0, address_service_1.deleteAddressService)(id);
    return c.json({ message });
};
exports.deleteAddress = deleteAddress;
