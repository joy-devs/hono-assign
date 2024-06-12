import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { Orders, TIOrders, TSOrders } from "../drizzle/schema"; 

export const ordersService = async (limit?: number): Promise<TSOrders[] | null> => {
    if (limit) {
        return await db.query.Orders.findMany({
            limit: limit
        });
    }
    return await db.query.Orders.findMany();
}

export const getOrderService = async (id: number): Promise<TIOrders | undefined> => {
    return await db.query.Orders.findFirst({
        where: eq(Orders.id, id)
    });
}

export const createOrderService = async (order: TIOrders) => {
    await db.insert(Orders).values(order);
    return "Order created successfully";
}

export const updateOrderService = async (id: number, order: TIOrders) => {
    await db.update(Orders).set(order).where(eq(Orders.id, id));
    return "Order updated successfully";
}

export const deleteOrderService = async (id: number) => {
    await db.delete(Orders).where(eq(Orders.id, id));
    return "Order deleted successfully";
}
