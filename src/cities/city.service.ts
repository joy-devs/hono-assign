import { eq } from "drizzle-orm";
import db from "../drizzle/db"
import { City, TICity, TSCity } from "../drizzle/schema"; 


export const citiesService = async (limit?: number): Promise<TSCity[] | null> => {
    if (limit) {
        return await db.query.City.findMany({
            limit: limit
        });
    }
    return await db.query.City.findMany();
}

export const getCityService = async (id: number): Promise<TICity | undefined> => {
    return await db.query.City.findFirst({
        where: eq(City.id, id)
    })
}

export const createCityService = async (city: TICity) => {
    await db.insert(City).values(city)
    return "City created successfully";
}

export const updateCityService = async (id: number, city: TICity) => {
    await db.update(City).set(city).where(eq(City.id, id))
    return "City updated successfully";
}

export const deleteCityService = async (id: number) => {
    await db.delete(City).where(eq(City.id, id))
    return "City deleted successfully";
}