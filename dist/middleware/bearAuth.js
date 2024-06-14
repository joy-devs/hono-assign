"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bothRoleAuth = exports.userRoleAuth = exports.adminRoleAuth = exports.jm = exports.authMiddleware = exports.verifyToken = void 0;
require("dotenv/config");
const jwt_1 = require("hono/jwt");
// authenticating middleware
const verifyToken = async (token, secret) => {
    try {
        const decoded = await (0, jwt_1.verify)(token, secret);
        return decoded;
    }
    catch (error) {
        return null;
    }
};
exports.verifyToken = verifyToken;
// authorize middleware
const authMiddleware = async (c, next, requiredRole) => {
    const token = c.req.header("authorization");
    if (!token)
        return c.json({ error: "token not provided" }, 401);
    const decoded = await (0, exports.verifyToken)(token, process.env.JWT_SECRET);
    if (!decoded)
        return c.json({ error: "Invalid token" }, 401);
    if (decoded.role !== requiredRole)
        return c.json({ error: "Unauthorized" }, 401);
    return next();
};
exports.authMiddleware = authMiddleware;
const jm = async (c, next) => {
    const token = c.req.header("authorization");
    if (!token)
        return c.json({ error: "token not provided" }, 401);
    const decoded = await (0, exports.verifyToken)(token, process.env.JWT_SECRET);
    if (!decoded)
        return c.json({ error: "Invalid token" }, 401);
    return next();
};
exports.jm = jm;
const adminRoleAuth = async (c, next) => await (0, exports.authMiddleware)(c, next, "admin");
exports.adminRoleAuth = adminRoleAuth;
const userRoleAuth = async (c, next) => await (0, exports.authMiddleware)(c, next, "user");
exports.userRoleAuth = userRoleAuth;
const bothRoleAuth = async (c, next) => await (0, exports.jm)(c, next);
exports.bothRoleAuth = bothRoleAuth;
// export const restaurantownerRoleAuth = async (c: Context, next: Next) =>await jm(c,"restaurantowner")
