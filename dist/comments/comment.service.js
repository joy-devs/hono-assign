"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCommentService = exports.updateCommentService = exports.createCommentService = exports.getCommentService = exports.commentsService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const commentsService = async (limit) => {
    if (limit) {
        return await db_1.default.query.Comment.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.Comment.findMany();
};
exports.commentsService = commentsService;
const getCommentService = async (id) => {
    return await db_1.default.query.Comment.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.Comment.id, id)
    });
};
exports.getCommentService = getCommentService;
const createCommentService = async (comment) => {
    await db_1.default.insert(schema_1.Comment).values(comment).execute();
    return "Comment created successfully";
};
exports.createCommentService = createCommentService;
const updateCommentService = async (id, comment) => {
    await db_1.default.update(schema_1.Comment).set(comment).where((0, drizzle_orm_1.eq)(schema_1.Comment.id, id)).execute();
    return "Comment updated successfully";
};
exports.updateCommentService = updateCommentService;
const deleteCommentService = async (id) => {
    await db_1.default.delete(schema_1.Comment).where((0, drizzle_orm_1.eq)(schema_1.Comment.id, id)).execute();
    return "Comment deleted successfully";
};
exports.deleteCommentService = deleteCommentService;
