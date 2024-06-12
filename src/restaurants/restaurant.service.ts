import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { Restaurant, TIRestaurant, TSRestaurant } from "../drizzle/schema"; 

export const restaurantsService = async (limit?: number): Promise<TSRestaurant[] | null> => {
    if (limit) {
        return await db.query.Restaurant.findMany({
            limit: limit
        });
    }
    return await db.query.Restaurant.findMany();
}

export const getRestaurantService = async (id: number): Promise<TIRestaurant | undefined> => {
    return await db.query.Restaurant.findFirst({
        where: eq(Restaurant.id, id)
    });
}

export const createRestaurantService = async (restaurant: TIRestaurant) => {
    await db.insert(Restaurant).values(restaurant);
    return "Restaurant created successfully";
}

export const updateRestaurantService = async (id: number, restaurant: TIRestaurant) => {
    await db.update(Restaurant).set(restaurant).where(eq(Restaurant.id, id));
    return "Restaurant updated successfully";
}

export const deleteRestaurantService = async (id: number) => {
    await db.delete(Restaurant).where(eq(Restaurant.id, id));
    return "Restaurant deleted successfully";
}
