import { IPayment } from "./payment.interface";
import { IService } from "./service.interface";
import { ITimeSlot } from "./timeslot.interface";
import { IUser } from "./user.interface";

export enum BookingStatus {
    PENDING = 'PENDING',
    CONFIRMED = 'CONFIRMED',
    COMPLETED = 'COMPLETED',
    CANCELED = 'CANCELED',
}


export interface IBooking {
    id: number;
    timeSlotId: number;
    timeSlot: ITimeSlot;
    paymentId?: number | null;
    payment?: IPayment | null;
    status: BookingStatus;
    userId: number;
    user: IUser;
    serviceId: number;
    service: IService;
    createdAt: Date;
    updatedAt: Date;
}