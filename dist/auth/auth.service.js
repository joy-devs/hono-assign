"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoginService = exports.createAuthUserService = void 0;
const schema_1 = require("../drizzle/schema");
const db_1 = __importDefault(require("../drizzle/db"));
const drizzle_orm_1 = require("drizzle-orm");
const createAuthUserService = async (user) => {
    await db_1.default.insert(schema_1.AuthonUser).values(user);
    return "User created successfully";
};
exports.createAuthUserService = createAuthUserService;
const userLoginService = async (user) => {
    const { username, password } = user;
    return await db_1.default.query.AuthonUser.findFirst({
        columns: {
            username: true,
            role: true,
            password: true
        }, where: (0, drizzle_orm_1.sql) ` ${schema_1.AuthonUser.username} = ${username}`,
        with: {
            user: {
                columns: {
                    id: true,
                    name: true,
                    contact_phone: true,
                    personal_email: true,
                    email: true,
                    password: true,
                    address_id: true
                }
            }
        }
    });
};
exports.userLoginService = userLoginService;
