import { eq } from "drizzle-orm";
import db from "../drizzle/db"
import { RestaurantOwner, TIRestaurantOwner,TSRestaurantOwner } from "../drizzle/schema"; 


export const ownersService = async (limit?: number): Promise<TSRestaurantOwner[] | null> => {
    if (limit) {
        return await db.query.RestaurantOwner.findMany({
            limit: limit
        });
    }
    return await db.query.RestaurantOwner.findMany();
}

export const getRestaurantOwnerService = async (id: number): Promise<TIRestaurantOwner | undefined> => {
    return await db.query.RestaurantOwner.findFirst({
        where: eq(RestaurantOwner.id, id)
    })
}

export const createRestaurantOwnerService = async (owner: TIRestaurantOwner) => {
    await db.insert(RestaurantOwner).values(owner)
    return "RestaurantOwner created successfully";
}

export const updateRestaurantOwnerService = async (id: number, owner: TIRestaurantOwner) => {
    await db.update(RestaurantOwner).set(owner).where(eq(RestaurantOwner.id, id))
    return "RestaurantOwner updated successfully";
}

export const deleteRestaurantOwnerService = async (id: number) => {
    await db.delete(RestaurantOwner).where(eq(RestaurantOwner.id, id))
    return "RestaurantOnwner deleted successfully";
}