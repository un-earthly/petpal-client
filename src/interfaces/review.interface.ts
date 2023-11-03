import IUser from "./user.interface";

interface IReview {
    id: number;
    rating: number;
    comments: string;
    userID: number;
    user: Partial<IUser>;
    serviceId?: number;
    petId?: number;
}
export default IReview