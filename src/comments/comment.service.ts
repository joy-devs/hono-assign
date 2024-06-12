import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { Comment, TIComment, TSComment } from "../drizzle/schema"; 

export const commentsService = async (limit?: number): Promise<TSComment[] | null> => { 
    if (limit) {
        return await db.query.Comment.findMany({ 
            limit: limit
        });
    }
    return await db.query.Comment.findMany(); 
}

export const getCommentService = async (id: number): Promise<TIComment | undefined> => { 
    return await db.query.Comment.findFirst({ 
            where: eq(Comment.id, id) 
    })
}

export const createCommentService = async (comment: TIComment) => { 
    await db.insert(Comment).values(comment).execute(); 
    return "Comment created successfully"; 
}

export const updateCommentService = async (id: number, comment: TIComment) => { 
    await db.update(Comment).set(comment).where(eq(Comment.id, id)).execute(); 
    return "Comment updated successfully"; 
}

export const deleteCommentService = async (id: number) => { 
    await db.delete(Comment).where(eq(Comment.id, id)).execute(); 
    return "Comment deleted successfully"; 
}
