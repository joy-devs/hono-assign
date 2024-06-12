import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { StatusCatalog, TIStatusCatalog, TSStatusCatalog } from "../drizzle/schema"; // Updated import statement for StatusCatalog entity

export const statusCatalogsService = async (limit?: number): Promise<TSStatusCatalog[] | null> => { // Renamed function to statusCatalogsService
    if (limit) {
        return await db.query.StatusCatalog.findMany({ // Updated query to use StatusCatalog entity
            limit: limit
        });
    }
    return await db.query.StatusCatalog.findMany(); // Updated query to use StatusCatalog entity
}

export const getStatusCatalogService = async (id: number): Promise<TIStatusCatalog | undefined> => { // Renamed function to getStatusCatalogService
    return await db.query.StatusCatalog.findFirst({ // Updated query to use StatusCatalog entity
        where: eq(StatusCatalog.id, id) // Updated condition to use StatusCatalog entity
    })
}

export const createStatusCatalogService = async (statusCatalog: TIStatusCatalog) => { // Renamed function to createStatusCatalogService
    await db.insert(StatusCatalog).values(statusCatalog).execute(); // Updated query to use StatusCatalog entity and executed it
    return "StatusCatalog created successfully"; // Updated success message
}

export const updateStatusCatalogService = async (id: number, statusCatalog: TIStatusCatalog) => { // Renamed function to updateStatusCatalogService
    await db.update(StatusCatalog).set(statusCatalog).where(eq(StatusCatalog.id, id)).execute(); // Updated query to use StatusCatalog entity, executed it, and updated condition
    return "StatusCatalog updated successfully"; // Updated success message
}

export const deleteStatusCatalogService = async (id: number) => { // Renamed function to deleteStatusCatalogService
    await db.delete(StatusCatalog).where(eq(StatusCatalog.id, id)).execute(); // Updated query to use StatusCatalog entity, executed it, and updated condition
    return "StatusCatalog deleted successfully"; // Updated success message
}
