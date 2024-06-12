import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { OrderMenuItem, TIOrderMenuItem, TSOrderMenuItem } from "../drizzle/schema"; 

export const orderMenuItemsService = async (limit?: number): Promise<TSOrderMenuItem[] | null> => {
    if (limit) {
        return await db.query.OrderMenuItem.findMany({
            limit: limit
        });
    }
    return await db.query.OrderMenuItem.findMany();
}

export const getOrderMenuItemService = async (id: number): Promise<TIOrderMenuItem | undefined> => {
    return await db.query.OrderMenuItem.findFirst({
        where: eq(OrderMenuItem.id, id)
    });
}

export const createOrderMenuItemService = async (orderMenuItem: TIOrderMenuItem) => {
    await db.insert(OrderMenuItem).values(orderMenuItem).execute(); // Make sure to execute the query
    return "OrderMenuItem created successfully";
}

export const updateOrderMenuItemService = async (id: number, orderMenuItem: TIOrderMenuItem) => {
    await db.update(OrderMenuItem).set(orderMenuItem).where(eq(OrderMenuItem.id, id)).execute(); // Make sure to execute the query
    return "OrderMenuItem updated successfully";
}

export const deleteOrderMenuItemService = async (id: number) => {
    await db.delete(OrderMenuItem).where(eq(OrderMenuItem.id, id)).execute(); // Make sure to execute the query
    return "OrderMenuItem deleted successfully";
}
