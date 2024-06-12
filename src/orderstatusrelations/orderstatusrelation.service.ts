import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { OrderStatusRelation, TIOrderStatusRelation, TSOrderStatusRelation } from "../drizzle/schema"; 

export const orderStatusRelationsService = async (limit?: number): Promise<TSOrderStatusRelation[] | null> => {
    if (limit) {
        return await db.query.OrderStatusRelation.findMany({
            limit: limit
        });
    }
    return await db.query.OrderStatusRelation.findMany();
}

export const getOrderStatusRelationService = async (id: number): Promise<TIOrderStatusRelation | undefined> => {
    return await db.query.OrderStatusRelation.findFirst({
        where: eq(OrderStatusRelation.id, id)
    });
}

export const createOrderStatusRelationService = async (orderStatusRelation: TIOrderStatusRelation) => {
    await db.insert(OrderStatusRelation).values(orderStatusRelation).execute(); 
    return "OrderStatusRelation created successfully";
}

export const updateOrderStatusRelationService = async (id: number, orderStatusRelation: TIOrderStatusRelation) => {
    await db.update(OrderStatusRelation).set(orderStatusRelation).where(eq(OrderStatusRelation.id, id)).execute(); // Make sure to execute the query
    return "OrderStatusRelation updated successfully";
}

export const deleteOrderStatusRelationService = async (id: number) => {
    await db.delete(OrderStatusRelation).where(eq(OrderStatusRelation.id, id)).execute(); // Make sure to execute the query
    return "OrderStatusRelation deleted successfully";
}
