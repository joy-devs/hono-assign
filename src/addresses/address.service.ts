import { eq } from "drizzle-orm";
import db from "../drizzle/db"
import { Address, TIAddress, TSAddress } from "../drizzle/schema"; 

export const addressesService = async (limit?: number): Promise<TSAddress[] | null> => {
    if (limit) {
        return await db.query.Address.findMany({
            limit: limit
        });
    }
    return await db.query.Address.findMany();
}

export const getAddressService = async (id: number): Promise<TIAddress | undefined> => {
    return await db.query.Address.findFirst({
        where: eq(Address.id, id)
    });
}

export const createAddressService = async (address: TIAddress) => {
    await db.insert(Address).values(address);
    return "Address created successfully";
}

export const updateAddressService = async (id: number, address: TIAddress) => {
    await db.update(Address).set(address).where(eq(Address.id, id));
    return "Address updated successfully";
}

export const deleteAddressService = async (id: number) => {
    await db.delete(Address).where(eq(Address.id, id));
    return "Address deleted successfully";
}
