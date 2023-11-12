import { IArticle } from "./article.interface";
import { IBooking } from "./booking.interface";
import { IPayment } from "./payment.interface";
import { IReview } from "./review.interface";

export interface IUser {
    id: number;
    email: string;
    password: string;
    name: string;
    role: Role;
    profileImage?: string | null;
    phoneNumber?: string | null;
    address?: string | null;
    bio?: string | null;
    gender?: string | null;
    articles: IArticle[];
    reviews: IReview[];
    payments: IPayment[];
    bookings: IBooking[];
    createdAt: Date;
    updatedAt: Date;
}

export enum Role {
    USER = 'USER',
    ADMIN = 'ADMIN',
    SUPER_ADMIN = 'SUPER_ADMIN',
}
