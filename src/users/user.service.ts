import { eq } from "drizzle-orm";
import db from "../drizzle/db"
import { User, TIUser,TSUser } from "../drizzle/schema"; 


export const usersService = async (limit?: number): Promise<TSUser[] | null> => {
    if (limit) {
        return await db.query.User.findMany({
            limit: limit
        });
    }
    return await db.query.User.findMany();
}

export const getUserService = async (id: number): Promise<TIUser | undefined> => {
    return await db.query.User.findFirst({
        where: eq(User.id, id)
    })
}

export const createUserService = async (user: TIUser) => {
    await db.insert(User).values(user)
    return "User created successfully";
}

export const updateUserService = async (id: number, user: TIUser) => {
    await db.update(User).set(user).where(eq(User.id, id))
    return "User updated successfully";
}

export const deleteUserService = async (id: number) => {
    await db.delete(User).where(eq(User.id, id))
    return "User deleted successfully";
}