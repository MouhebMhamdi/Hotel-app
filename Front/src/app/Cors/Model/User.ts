import { Hotel } from "./Hotel";

export class User{
    id: number;
    email: string;
    role: string;
    photo: string;
    Adresse: string;
    Phone: number;
    FullName: string;
    reservation:Hotel;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    AccessToken:any;
}