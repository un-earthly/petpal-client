import { IService } from "./service.interface";
import { IUser } from "./user.interface";


export interface IReview {
    id: number;
    rating: number;
    comments: string;
    userId: number;
    user: IUser;
    serviceId: number;
    service: IService;
    createdAt: Date;
    updatedAt: Date;
}
