import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { Category, TICategory, TSCategory } from "../drizzle/schema"; 

export const categoriesService = async (limit?: number): Promise<TSCategory[] | null> => {
    if (limit) {
        return await db.query.Category.findMany({
            limit: limit
        });
    }
    return await db.query.Category.findMany();
}

export const getCategoryService = async (id: number): Promise<TICategory | undefined> => {
    return await db.query.Category.findFirst({
        where: eq(Category.id, id)
    });
}

export const createCategoryService = async (category: TICategory) => {
    await db.insert(Category).values(category);
    return "Category created successfully";
}

export const updateCategoryService = async (id: number, category: TICategory) => {
    await db.update(Category).set(category).where(eq(Category.id, id));
    return "Category updated successfully";
}

export const deleteCategoryService = async (id: number) => {
    await db.delete(Category).where(eq(Category.id, id));
    return "Category deleted successfully";
}
