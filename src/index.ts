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




const app = new Hono()

//default route
app.get('/ok', (c) => {
  return c.text('the code is okay ')
})

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




  

console.log(`Server is running on port ${process.env.port}`)

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT) 
})