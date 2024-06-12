import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { MenuItem, TIMenuItem, TSMenuItem } from "../drizzle/schema";

export const menuItemsService = async (limit?: number): Promise<TSMenuItem[] | null> => {
    if (limit) {
        return await db.query.MenuItem.findMany({
            limit: limit
        });
    }
    return await db.query.MenuItem.findMany();
}

export const getMenuItemService = async (id: number): Promise<TIMenuItem | undefined> => {
    return await db.query.MenuItem.findFirst({
        where: eq(MenuItem.id, id)
    });
}

export const createMenuItemService = async (menuItem: TIMenuItem) => {
    await db.insert(MenuItem).values(menuItem);
    return "Menu item created successfully";
}

export const updateMenuItemService = async (id: number, menuItem: TIMenuItem) => {
    await db.update(MenuItem).set(menuItem).where(eq(MenuItem.id, id));
    return "Menu item updated successfully";
}

export const deleteMenuItemService = async (id: number) => {
    await db.delete(MenuItem).where(eq(MenuItem.id, id));
    return "Menu item deleted successfully";
}
