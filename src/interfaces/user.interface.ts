export enum IUserRolesEnum {
    USER = 'USER',
    ADMIN = 'ADMIN',
    SUPER_ADMIN = 'SUPER_ADMIN'
}


interface IUser {
    id: number;
    email: string;
    password: string;
    name: string;
    role: IUserRolesEnum;
    profileImage: string;
    phoneNumber: string;
    address: string;
    bio: string;
    pets: string[];
    articleId: string[];
    reviews: string[];
    bookedServicesId: string[];
    perticipatingEvents: string[];
    notificationsEnabled: boolean;
}


export default IUser



