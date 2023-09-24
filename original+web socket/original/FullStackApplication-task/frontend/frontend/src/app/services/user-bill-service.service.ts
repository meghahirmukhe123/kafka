import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserBill } from 'src/user-bill';

@Injectable({
  providedIn: 'root'
})
export class UserBillServiceService {

  constructor(private http: HttpClient) { }
  
  //save user bill

  public saveUserBill(bill: UserBill): Observable<any> {
    return this.http.post("http://localhost:1006/save", bill);
  }

  //get all user bill

  getAllUserBills(): Observable<UserBill[]> {
    return this.http.get<UserBill[]>("http://localhost:1006/getallbill");
  }

  //get user bill by email id

  private baseUrl = "http://localhost:1003";
  getUserBillByEmail(emailId: string): Observable<UserBill> {
    return this.http.get<UserBill>(`${this.baseUrl}/getuserbill/${emailId}`);
  }

  getAllUserBillsByEmail(emailId: string): Observable<UserBill[]> {
    return this.http.get<UserBill[]>(`${this.baseUrl}/getallbillsbyemail/${emailId}`);
  }


  getKafkaMessage(): Observable<string> {
    return this.http.get<string>('http://localhost:1006/getKafkaMessage');
  }

  deleteurl="http://localhost:1006/deleteuserbill"
  deleteProductDetailsByEmailID(emailId: string): Observable<Object> {
    return this.http.delete(`${this.deleteurl}/${emailId}`);
  }










}
