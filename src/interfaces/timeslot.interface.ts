import { IBooking } from "./booking.interface";

export interface ITimeSlot {
    id: number;
    startTime: string;
    endTime: string;
    isAvailable: boolean;
    date: Date;
    bookings: IBooking[];
    createdAt: Date;
    updatedAt: Date;
}