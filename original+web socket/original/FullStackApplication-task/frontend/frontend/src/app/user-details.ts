import { UserBill } from "src/user-bill";
import { PersonalDetails } from "./personal-details";

export class UserDetails {
    userId!:string;
    firstName!: string;
    lastName!: string;
    emailId!: string;
    city!: string;
    pinCode!: number;

    personalDetails: PersonalDetails[] = [];
   
    
}
