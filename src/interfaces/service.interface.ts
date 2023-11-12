enum PetServiceCategory {
    GROOMING = "GROOMING",
    BOARDING = "BOARDING",
    TRAINING = "TRAINING",
    WALKING = "WALKING",
    VETERINARY = "VETERINARY",
    SITTING = "SITTING",
    DAYCARE = "DAYCARE",
    OTHERS = "OTHERS",
}


export interface ITimeSlot {
    id?: number;
    startTime: string;
    endTime: string;
    isAvailable: boolean;
    date: Date;
    createdAt?: Date;
    updatedAt?: Date;
}
interface IService {
    id: number;
    title: string;
    description: string;
    category: PetServiceCategory;
    image: string;
    price: number;
    selectedTime: string;
    availableTimeSlots?: ITimeSlot[];
    isPaid: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export default IService;
