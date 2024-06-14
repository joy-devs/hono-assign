import { AuthonUser, TIAuthonUser, TSAuthonUser } from "../drizzle/schema";
import db from "../drizzle/db";
import { sql } from "drizzle-orm";

export const createAuthUserService = async (user: TIAuthonUser): Promise<string | null> => {
    await db.insert(AuthonUser).values(user)
    return "User created successfully";
}

export const userLoginService = async (user: TSAuthonUser) => {
    const { username, password } = user;
    return await db.query.AuthonUser.findFirst({
        columns: {
            username: true,
            role: true,
            password: true
        }, where: sql` ${AuthonUser.username} = ${username}`,
        with: {
            user: {
                columns: {
                    id:true,
                    name:true,
                    contact_phone:true,
                    personal_email:true,
                    email: true,
                    password:true,
                    address_id:true

                }
            }
        }
    })
}