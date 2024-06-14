"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderstatusrelationSchema = exports.statuscatalogSchema = exports.commentSchema = exports.ordermenuitemSchema = exports.orderSchema = exports.orderstatusSchema = exports.categorySchema = exports.ownerSchema = exports.citySchema = exports.addressSchema = exports.restaurantSchema = exports.menuitemSchema = exports.stateSchema = exports.registerUserSchema = exports.loginUserSchema = exports.userSchema = void 0;
const zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    contact_phone: zod_1.z.string(),
    personal_email: zod_1.z.string(),
    email: zod_1.z.string(),
    password: zod_1.z.string(),
    address_id: zod_1.z.number()
});
exports.loginUserSchema = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string()
});
exports.registerUserSchema = zod_1.z.object({
    userId: zod_1.z.number(),
    password: zod_1.z.string(),
    username: zod_1.z.string(),
    role: zod_1.z.string().optional()
});
exports.stateSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    City: zod_1.z.string()
});
exports.menuitemSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string()
});
exports.restaurantSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    street_address: zod_1.z.string(),
    address_id: zod_1.z.number(),
    city_id: zod_1.z.number(),
});
exports.addressSchema = zod_1.z.object({
    id: zod_1.z.number().optional(),
    street_address: zod_1.z.string(),
    city_id: zod_1.z.number(),
    postal_code: zod_1.z.number(),
});
exports.citySchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    zipcode: zod_1.z.number(),
    address: zod_1.z.string(),
    state_id: zod_1.z.number(),
    country: zod_1.z.string()
});
exports.ownerSchema = zod_1.z.object({
    id: zod_1.z.number(),
    restaurant_id: zod_1.z.number(),
    owner_id: zod_1.z.number()
});
exports.categorySchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string()
});
exports.orderstatusSchema = zod_1.z.object({
    id: zod_1.z.number(),
    status: zod_1.z.string()
});
exports.orderSchema = zod_1.z.object({
    id: zod_1.z.number(),
    status_id: zod_1.z.number(),
    price: zod_1.z.number(),
    address_id: zod_1.z.number(),
    user_id: zod_1.z.number(),
    restaurant_id: zod_1.z.number()
});
exports.ordermenuitemSchema = zod_1.z.object({
    id: zod_1.z.number(),
    order_id: zod_1.z.number(),
    menu_item_id: zod_1.z.number(),
    quantity: zod_1.z.number()
});
exports.commentSchema = zod_1.z.object({
    id: zod_1.z.number(),
    body: zod_1.z.string(),
    user_id: zod_1.z.number(),
    menu_item_id: zod_1.z.number(),
});
exports.statuscatalogSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string()
});
exports.orderstatusrelationSchema = zod_1.z.object({
    id: zod_1.z.number(),
    order_id: zod_1.z.number(),
    status_catalog_id: zod_1.z.number(),
});
// export const driverSchema = z.object({
//   id:z.number(),
//   car_make:z.string(),
//   car_model:z.string(),
//   car_year:z.number(),
//   user_id: z.number(),
//   online:z. boolean(),
//   delivering:z. boolean()
// })
