"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatusRelationRelations = exports.OrderStatusRelation = exports.StatusCatalogRelations = exports.StatusCatalog = exports.CommentRelations = exports.Comment = exports.OrderMenuItemRelations = exports.OrderMenuItem = exports.OrdersRelations = exports.Orders = exports.OrderStatusRelations = exports.OrderStatus = exports.MenuItemRelations = exports.MenuItem = exports.CategoryRelations = exports.Category = exports.RestaurantOwnerRelations = exports.RestaurantOwner = exports.AuthonUserRelations = exports.AuthonUser = exports.roleEnum = exports.UserRelations = exports.User = exports.RestaurantRelations = exports.Restaurant = exports.AddressRelations = exports.Address = exports.CityRelations = exports.City = exports.StateRelations = exports.State = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
// State Table
exports.State = (0, pg_core_1.pgTable)('state', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.varchar)('name', { length: 255 }).notNull(),
    code: (0, pg_core_1.varchar)('code', { length: 10 }).notNull(),
    City: (0, pg_core_1.varchar)("city").notNull()
});
exports.StateRelations = (0, drizzle_orm_1.relations)(exports.State, ({ many }) => ({
    cities: many(exports.City),
}));
// City Table
exports.City = (0, pg_core_1.pgTable)('city', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.varchar)('name', { length: 255 }).notNull(),
    zipcode: (0, pg_core_1.integer)('zipcode').notNull(),
    address: (0, pg_core_1.varchar)('address', { length: 255 }).notNull(),
    state_id: (0, pg_core_1.integer)('state_id').references(() => exports.State.id).notNull(),
});
exports.CityRelations = (0, drizzle_orm_1.relations)(exports.City, ({ one, many }) => ({
    state: one(exports.State, {
        fields: [exports.City.state_id],
        references: [exports.State.id],
    }),
    addresses: many(exports.Address),
    restaurants: many(exports.Restaurant),
}));
// Address Table
exports.Address = (0, pg_core_1.pgTable)('address', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    street_address: (0, pg_core_1.varchar)('street_address', { length: 255 }).notNull(),
    city_id: (0, pg_core_1.integer)('city_id').references(() => exports.City.id).notNull(),
    postal_code: (0, pg_core_1.integer)('postal_code').notNull()
});
exports.AddressRelations = (0, drizzle_orm_1.relations)(exports.Address, ({ one, many }) => ({
    city: one(exports.City, {
        fields: [exports.Address.city_id],
        references: [exports.City.id],
    }),
    restaurants: many(exports.Restaurant),
    users: many(exports.User),
}));
// Restaurant Table
exports.Restaurant = (0, pg_core_1.pgTable)('restaurant', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.varchar)('name', { length: 255 }).notNull(),
    street_address: (0, pg_core_1.varchar)('street_address', { length: 255 }).notNull(),
    address_id: (0, pg_core_1.integer)('address_id').references(() => exports.Address.id).notNull(),
    city_id: (0, pg_core_1.integer)('city_id').references(() => exports.City.id).notNull()
});
exports.RestaurantRelations = (0, drizzle_orm_1.relations)(exports.Restaurant, ({ one, many }) => ({
    address: one(exports.Address, {
        fields: [exports.Restaurant.address_id],
        references: [exports.Address.id],
    }),
    city: one(exports.City, {
        fields: [exports.Restaurant.city_id],
        references: [exports.City.id],
    }),
    owners: many(exports.RestaurantOwner),
    menu_items: many(exports.MenuItem),
}));
// User Table
exports.User = (0, pg_core_1.pgTable)('user', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.varchar)('name', { length: 255 }).notNull(),
    contact_phone: (0, pg_core_1.varchar)('contact_phone', { length: 255 }).notNull(),
    personal_email: (0, pg_core_1.varchar)('personal_email', { length: 255 }).notNull(),
    email: (0, pg_core_1.varchar)('email', { length: 255 }).notNull(),
    password: (0, pg_core_1.varchar)('password', { length: 255 }).notNull(),
    address_id: (0, pg_core_1.integer)('address_id').references(() => exports.Address.id).notNull(),
});
exports.UserRelations = (0, drizzle_orm_1.relations)(exports.User, ({ one, many }) => ({
    address: one(exports.Address, {
        fields: [exports.User.address_id],
        references: [exports.Address.id],
    }),
    comments: many(exports.Comment),
}));
exports.roleEnum = (0, pg_core_1.pgEnum)("role", ["admin", "user"]);
exports.AuthonUser = (0, pg_core_1.pgTable)("auth_on_users", {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    userId: (0, pg_core_1.integer)("user_id").notNull().references(() => exports.User.id, { onDelete: "cascade" }),
    password: (0, pg_core_1.varchar)("password", { length: 100 }),
    username: (0, pg_core_1.varchar)("username", { length: 100 }),
    role: (0, exports.roleEnum)("role").default("user")
});
exports.AuthonUserRelations = (0, drizzle_orm_1.relations)(exports.AuthonUser, ({ one }) => ({
    user: one(exports.User, {
        fields: [exports.AuthonUser.userId],
        references: [exports.User.id]
    })
}));
// RestaurantOwner Table
exports.RestaurantOwner = (0, pg_core_1.pgTable)('restaurant_owner', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    restaurant_id: (0, pg_core_1.integer)('restaurant_id').references(() => exports.Restaurant.id).notNull(),
    owner_id: (0, pg_core_1.integer)('owner_id').references(() => exports.User.id).notNull(),
});
exports.RestaurantOwnerRelations = (0, drizzle_orm_1.relations)(exports.RestaurantOwner, ({ one }) => ({
    restaurant: one(exports.Restaurant, {
        fields: [exports.RestaurantOwner.restaurant_id],
        references: [exports.Restaurant.id],
    }),
    owner: one(exports.User, {
        fields: [exports.RestaurantOwner.owner_id],
        references: [exports.User.id],
    }),
}));
// Category Table
exports.Category = (0, pg_core_1.pgTable)('category', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.varchar)('name', { length: 255 }).notNull(),
});
exports.CategoryRelations = (0, drizzle_orm_1.relations)(exports.Category, ({ many }) => ({
    menu_items: many(exports.MenuItem),
}));
// MenuItem Table
exports.MenuItem = (0, pg_core_1.pgTable)('menu_item', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    restaurant_id: (0, pg_core_1.integer)('restaurant_id').references(() => exports.Restaurant.id).notNull(),
    category_id: (0, pg_core_1.integer)('category_id').references(() => exports.Category.id).notNull(),
    name: (0, pg_core_1.varchar)('name', { length: 255 }).notNull(),
    ingredients: (0, pg_core_1.text)('ingredients').notNull(),
    price: (0, pg_core_1.integer)('price').notNull()
});
exports.MenuItemRelations = (0, drizzle_orm_1.relations)(exports.MenuItem, ({ one, many }) => ({
    restaurant: one(exports.Restaurant, {
        fields: [exports.MenuItem.restaurant_id],
        references: [exports.Restaurant.id],
    }),
    category: one(exports.Category, {
        fields: [exports.MenuItem.category_id],
        references: [exports.Category.id],
    }),
    order_items: many(exports.OrderMenuItem),
    comments: many(exports.Comment),
}));
// OrderStatus Table
exports.OrderStatus = (0, pg_core_1.pgTable)('order_status', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    status: (0, pg_core_1.varchar)('status', { length: 255 }).notNull(),
});
exports.OrderStatusRelations = (0, drizzle_orm_1.relations)(exports.OrderStatus, ({ many }) => ({
    orders: many(exports.Orders),
}));
// Orders Table
exports.Orders = (0, pg_core_1.pgTable)('orders', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    status_id: (0, pg_core_1.integer)('status_id').references(() => exports.OrderStatus.id).notNull(),
    price: (0, pg_core_1.integer)('price').notNull(),
    address_id: (0, pg_core_1.integer)('address_id').references(() => exports.Address.id).notNull(),
    user_id: (0, pg_core_1.integer)('user_id').references(() => exports.User.id).notNull(),
    restaurant_id: (0, pg_core_1.integer)('restaurant_id').references(() => exports.Restaurant.id).notNull(),
});
exports.OrdersRelations = (0, drizzle_orm_1.relations)(exports.Orders, ({ one, many }) => ({
    address: one(exports.Address, {
        fields: [exports.Orders.address_id],
        references: [exports.Address.id],
    }),
    user: one(exports.User, {
        fields: [exports.Orders.user_id],
        references: [exports.User.id],
    }),
    restaurant: one(exports.Restaurant, {
        fields: [exports.Orders.restaurant_id],
        references: [exports.Restaurant.id],
    }),
    order_items: many(exports.OrderMenuItem),
    status: one(exports.OrderStatus, {
        fields: [exports.Orders.status_id],
        references: [exports.OrderStatus.id],
    }),
}));
// OrderMenuItem Table
exports.OrderMenuItem = (0, pg_core_1.pgTable)('order_menu_items', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    order_id: (0, pg_core_1.integer)('order_id').references(() => exports.Orders.id).notNull(),
    menu_item_id: (0, pg_core_1.integer)('menu_item_id').references(() => exports.MenuItem.id).notNull(),
    quantity: (0, pg_core_1.integer)('quantity').notNull(),
});
exports.OrderMenuItemRelations = (0, drizzle_orm_1.relations)(exports.OrderMenuItem, ({ one }) => ({
    order: one(exports.Orders, {
        fields: [exports.OrderMenuItem.order_id],
        references: [exports.Orders.id],
    }),
    menu_item: one(exports.MenuItem, {
        fields: [exports.OrderMenuItem.menu_item_id],
        references: [exports.MenuItem.id],
    }),
}));
// Comment Table
exports.Comment = (0, pg_core_1.pgTable)('comment', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    body: (0, pg_core_1.text)('body').notNull(),
    user_id: (0, pg_core_1.integer)('user_id').references(() => exports.User.id).notNull(),
    menu_item_id: (0, pg_core_1.integer)('menu_item_id').references(() => exports.MenuItem.id).notNull()
});
exports.CommentRelations = (0, drizzle_orm_1.relations)(exports.Comment, ({ one }) => ({
    user: one(exports.User, {
        fields: [exports.Comment.user_id],
        references: [exports.User.id],
    }),
    menu_item: one(exports.MenuItem, {
        fields: [exports.Comment.menu_item_id],
        references: [exports.MenuItem.id],
    }),
}));
// StatusCatalog Table
exports.StatusCatalog = (0, pg_core_1.pgTable)('status_catalog', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.text)('name').notNull(),
});
exports.StatusCatalogRelations = (0, drizzle_orm_1.relations)(exports.StatusCatalog, ({ many }) => ({
    order_status_relations: many(exports.OrderStatusRelation),
}));
// OrderStatusRelation Table
exports.OrderStatusRelation = (0, pg_core_1.pgTable)('order_status_relation', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    order_id: (0, pg_core_1.integer)('order_id').references(() => exports.Orders.id).notNull(),
    status_catalog_id: (0, pg_core_1.integer)('status_catalog_id').references(() => exports.StatusCatalog.id).notNull()
});
exports.OrderStatusRelationRelations = (0, drizzle_orm_1.relations)(exports.OrderStatusRelation, ({ one }) => ({
    order: one(exports.Orders, {
        fields: [exports.OrderStatusRelation.order_id],
        references: [exports.Orders.id],
    }),
    status_catalog: one(exports.StatusCatalog, {
        fields: [exports.OrderStatusRelation.status_catalog_id],
        references: [exports.StatusCatalog.id],
    }),
}));
