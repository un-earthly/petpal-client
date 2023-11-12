import { IBooking } from "./booking.interface";
import { IPayment } from "./payment.interface";
import { IReview } from "./review.interface";

export enum PetServiceCategory {
    GROOMING = 'GROOMING',
    BOARDING = 'BOARDING',
    TRAINING = 'TRAINING',
    WALKING = 'WALKING',
    VETERINARY = 'VETERINARY',
    SITTING = 'SITTING',
    DAYCARE = 'DAYCARE',
    OTHERS = 'OTHERS',
}

export interface IService {
    id: number;
    title: string;
    description: string;
    category: PetServiceCategory;
    price: number;
    image: string;
    reviews: IReview[];
    bookings: IBooking[];
    payments: IPayment[];
    createdAt: Date;
    updatedAt: Date;
}

