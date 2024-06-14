import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import "dotenv/config";
import { userRouter } from './users/user.router';
import { stateRouter } from './state/state.router';
import { cityRouter } from './cities/city.router';
import { addressRouter } from './addresses/address.router';
import { restaurantRouter } from './restaurants/restaurant.router';
import { ownerRouter } from './owners/owner.router';
import { categoryRouter } from './categories/category.router';
import { menuItemRouter } from './Menuitems/menuitem.router';
import { orderStatusRouter } from './orderstatuses/orderstatus.router';
import { orderRouter } from './orders/order.router';
import { orderMenuItemRouter } from './ordermenuitems/ordermenuitem.router';
import { commentRouter } from './comments/comment.router';
import { statusCatalogRouter } from './statuscatalogs/statuscatalog.router';
import { orderstatusrelationRouter } from './orderstatusrelations/orderstatusrelation.router';
import { authRouter } from './auth/auth.router';
import { Restaurant } from './drizzle/schema'
import {html} from 'hono/html'




const app = new Hono()

//default route
app.get("/", (c) => {
  return c.html(html`<DOCTYPE html>
    <html> 
    <head>
    <title>Restaurant API</title>
    <style>
   body{
    font-size:2opx;
    font-family:sans serif;
    text-align:center;
    border:1px solid blue; 
    border-radius:10px;
    border-width:100px
    
     }
    h1{

    }
    </style>
    </head>

    <body>
    <h1>Welcome to Garden Delight Restaurant BY Joyce 🍽️</h1>
    <p>We offer delicious meals<p>
    <p>The taste that make you feel awesome👌</p>
    <h3>It's not just food it's an experience😊</p>
    </body>
    </html>
   `);
});

//custom route
app.route("/api", userRouter) // /users
app.route("/api", stateRouter)
app.route("/api", cityRouter)
app.route("/api", addressRouter)
app.route("/api", restaurantRouter)
app.route("/api", ownerRouter)
app.route("/api", categoryRouter)
app.route("/api", menuItemRouter)
app.route("/api", orderStatusRouter)
app.route("/api", orderRouter)
app.route("/api", orderMenuItemRouter)
app.route("/api", commentRouter)
app.route("/api", statusCatalogRouter)
app.route("/api", orderstatusrelationRouter)
app.route("/api", authRouter)





  

console.log(`Server is running on port ${process.env.port}`)

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT) 
})
