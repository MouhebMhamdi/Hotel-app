import { User } from "./User";

export class Hotel{
    _id: any;
    name: string;
    adresse: string;
    phone: string;
    City: string;
    Country: string;
    nbr_rooms: number;
    price: number;
    description: string;
    User: User;
    photo: string;
    stars: number; 
    createdAt: Date;
    updatedAt: Date;
}