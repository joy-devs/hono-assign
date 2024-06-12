import {z} from 'zod'
import { City } from './drizzle/schema'
import { boolean } from 'drizzle-orm/mysql-core'
export const userSchema = z.object({

    id:z.string(),
  name:z.string(),
  contact_phone: z.string(),
  personal_email: z.string(),
  email: z. string(),
  password:z.string(),
  address_id: z.number()

})
export const stateSchema = z.object({
    id:z. number(),
    name: z.string(),
    City: z.string() 
})

export const menuitemSchema = z.object({
  id:z.number(),
  name:z.string()

})

export const restaurantSchema = z.object({
  id:z.number(),
  name: z.string(),
  street_address:z.string(),
  address_id:z.number(),
  city_id:z.number(),

})

export const addressSchema = z.object({
  id:z.number().optional(),
  street_address: z.string(),
  city_id:z. number(),
  postal_code: z.number(),

  

})



export const citySchema = z.object({
  id:z. number(),
  name: z.string(),
  zipcode:z.number(),
  address: z. string(),
  state_id:z. number(),
  country:z. string()

})
export const ownerSchema = z.object({
  id: z.number(),
  restaurant_id: z.number(),
  owner_id: z.number()

})
export const categorySchema = z.object({
  id:z.number(),
name:z.string()
})

export const orderstatusSchema = z.object({
  id:z.number(),
  status:z.string()
})
export const orderSchema = z.object({
  id:z.number(),
  status_id:z.number(),
  price:z.number(),
  address_id:z.number(),
  user_id:z.number(),
  restaurant_id: z.number()

})
export const ordermenuitemSchema = z.object({
  id:z.number(),
  order_id: z.number(),
  menu_item_id:z.number(),
  quantity: z.number()

})

export const commentSchema = z.object({
  id:z. number(),
  body: z.string(),
  user_id: z.number(),
  menu_item_id:z.number(),

})

export const statuscatalogSchema = z.object({
  id:z.number(),
  name:z.string()

})

export const orderstatusrelationSchema = z.object({
  id:z.number(),
  order_id:z.number(),
  status_catalog_id:z.number(),
 
})
// export const driverSchema = z.object({
//   id:z.number(),
//   car_make:z.string(),
//   car_model:z.string(),
//   car_year:z.number(),
//   user_id: z.number(),
//   online:z. boolean(),
//   delivering:z. boolean()

// })


