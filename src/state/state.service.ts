import { eq } from "drizzle-orm";
import db from "../drizzle/db"
import { State, TIState,TSState } from "../drizzle/schema"; 


export const stateService = async (limit?: number): Promise<TSState[] | null> => {
    if (limit) {
        return await db.query.State.findMany({
            limit: limit
        });
    }
    return await db.query.State.findMany();
}

export const getStateService = async (id: number): Promise<TIState | undefined> => {
    return await db.query.State.findFirst({
        where: eq(State.id, id)
    })
}

export const createStateService = async (state: TIState) => {
    await db.insert(State).values(state)
    return "User created successfully";
}

export const updateStateService = async (id: number, state: TIState) => {
    await db.update(State).set(state).where(eq(State.id, id))
    return "User updated successfully";
}

export const deleteStateService = async (id: number) => {
    await db.delete(State).where(eq(State.id, id))
    return "State deleted successfully";
}