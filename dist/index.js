"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_server_1 = require("@hono/node-server");
const hono_1 = require("hono");
require("dotenv/config");
const user_router_1 = require("./users/user.router");
const state_router_1 = require("./state/state.router");
const city_router_1 = require("./cities/city.router");
const address_router_1 = require("./addresses/address.router");
const restaurant_router_1 = require("./restaurants/restaurant.router");
const owner_router_1 = require("./owners/owner.router");
const category_router_1 = require("./categories/category.router");
const menuitem_router_1 = require("./Menuitems/menuitem.router");
const orderstatus_router_1 = require("./orderstatuses/orderstatus.router");
const order_router_1 = require("./orders/order.router");
const ordermenuitem_router_1 = require("./ordermenuitems/ordermenuitem.router");
const comment_router_1 = require("./comments/comment.router");
const statuscatalog_router_1 = require("./statuscatalogs/statuscatalog.router");
const orderstatusrelation_router_1 = require("./orderstatusrelations/orderstatusrelation.router");
const auth_router_1 = require("./auth/auth.router");
const html_1 = require("hono/html");
const app = new hono_1.Hono();
//default route
app.get("/", (c) => {
    return c.html((0, html_1.html) `<DOCTYPE html>
    <html> 
    <head>
    <title>Restaurant API</title>
    </head>

    <body>
    <h1>Welcome to Quick Eats Restaurant BY Joyce</h1>
    <p>We offer delicious meals<p>
    </body>
    </html>
   `);
});
//custom route
app.route("/api", user_router_1.userRouter); // /users
app.route("/api", state_router_1.stateRouter);
app.route("/api", city_router_1.cityRouter);
app.route("/api", address_router_1.addressRouter);
app.route("/api", restaurant_router_1.restaurantRouter);
app.route("/api", owner_router_1.ownerRouter);
app.route("/api", category_router_1.categoryRouter);
app.route("/api", menuitem_router_1.menuItemRouter);
app.route("/api", orderstatus_router_1.orderStatusRouter);
app.route("/api", order_router_1.orderRouter);
app.route("/api", ordermenuitem_router_1.orderMenuItemRouter);
app.route("/api", comment_router_1.commentRouter);
app.route("/api", statuscatalog_router_1.statusCatalogRouter);
app.route("/api", orderstatusrelation_router_1.orderstatusrelationRouter);
app.route("/api", auth_router_1.authRouter);
console.log(`Server is running on port ${process.env.port}`);
(0, node_server_1.serve)({
    fetch: app.fetch,
    port: Number(process.env.PORT)
});
