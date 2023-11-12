import { IBooking } from "./booking.interface";
import { IService } from "./service.interface";
import { IUser } from "./user.interface";


export enum PaymentStatus {
    UNPAID = 'UNPAID',
    PAID = 'PAID',
    REFUNDED = 'REFUNDED',
}

export interface IPayment {
    id: number;
    serviceId: number;
    service: IService;
    userId: number;
    user: IUser;
    totalAmount: number;
    transactionId: number;
    paymentStatus: PaymentStatus;
    paymentDate: Date;
    createdAt: Date;
    updatedAt: Date;
    bookings: IBooking[];
}
