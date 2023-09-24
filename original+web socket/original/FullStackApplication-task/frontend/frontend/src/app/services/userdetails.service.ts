import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetails } from '../user-details';
import { Observable } from 'rxjs';
import { UserBill } from 'src/user-bill';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  constructor(private http: HttpClient) { }

  //save user details
  public addUserDetails(userDetails: UserDetails): Observable<any> {
    return this.http.post("http://localhost:1001/save", userDetails);
  }

  //get all
  getUserDetailsList(): Observable<UserDetails[]> {
    return this.http.get<UserDetails[]>("http://localhost:1001/getall");
  }

  //get by email id
  getbyidurl = "http://localhost:1001/getbyemailid"
  getByEmailId(emailId: string): Observable<UserDetails> {
    return this.http.get<UserDetails>(`${this.getbyidurl}/${emailId}`);

  }


  /* method to update by email id*/
  updateurl = "http://localhost:1001/update"
  updateByEmailId(emailId: string, userDetails: UserDetails): Observable<Object> {
    return this.http.put(`${this.updateurl}/${emailId}`, userDetails);
  }

  /* method to delete by email id*/
  deleteurl = "http://localhost:1001/delete"
  deleteByEmailId(emailId: string): Observable<Object> {
    return this.http.delete(`${this.deleteurl}/${emailId}`);
  }

  //get communication data
  baseUrl = "http://localhost:1001/getbyemailid";
  getCommunicationData(emailId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${emailId}`);
  }

  //consumer url for get bill by email id
  
  getConsumerData(uBill: UserBill) : Observable<any>
  {
    return this.http.post("http://localhost:1003/getbill", uBill);

  }






}
