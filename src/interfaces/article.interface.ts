import { IUser } from "./user.interface";

export interface IArticle {
    id: number;
    title: string;
    content: string;
    authorId: number;
    author: IUser;
    createdAt: Date;
    updatedAt: Date;
    userId?: number | null;
}
