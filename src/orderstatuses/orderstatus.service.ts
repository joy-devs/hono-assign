import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { OrderStatus, TIOrderStatus, TSOrderStatus } from "../drizzle/schema"; 

export const orderStatusesService = async (limit?: number): Promise<TSOrderStatus[] | null> => {
    if (limit) {
        return await db.query.OrderStatus.findMany({
            limit: limit
        });
    }
    return await db.query.OrderStatus.findMany();
}

export const getOrderStatusService = async (id: number): Promise<TIOrderStatus | undefined> => {
    return await db.query.OrderStatus.findFirst({
        where: eq(OrderStatus.id, id)
    });
}

export const createOrderStatusService = async (orderStatus: TIOrderStatus) => {
    await db.insert(OrderStatus).values(orderStatus);
    return "OrderStatus created successfully";
}

export const updateOrderStatusService = async (id: number, orderStatus: TIOrderStatus) => {
    await db.update(OrderStatus).set(orderStatus).where(eq(OrderStatus.id, id));
    return "OrderStatus updated successfully";
}

export const deleteOrderStatusService = async (id: number) => {
    await db.delete(OrderStatus).where(eq(OrderStatus.id, id));
    return "OrderStatus deleted successfully";
}
