import { Hotel } from "./Hotel";
import { User } from "./User";

export class reservation{
    startDate : Date;
    endDate : Date;
    nbr_rooms   : number;
    nbrShildren : number;
    nbrAdults : number;
    hotel : Hotel;
    user : User;
}
