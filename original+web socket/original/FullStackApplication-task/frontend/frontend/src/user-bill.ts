import { ProductDetails } from "./app/product-details";

export class UserBill {
    billId!: string;
    emailId!: string;
    productName!: string;
    price!: number;
    date!: string; // Add the 'date' property here
    gst!: number;
    priceWithGST!: number;
    totalBillRs!: string;
    

  }
  
