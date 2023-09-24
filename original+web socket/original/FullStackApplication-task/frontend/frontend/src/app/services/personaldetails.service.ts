import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonalDetails } from '../personal-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaldetailsService {

  constructor(private http: HttpClient) { }


  //save user details
  public addPersonalDetails(personal: PersonalDetails): Observable<any> {
    return this.http.post("http://localhost:1002/savePersonalDetails", personal);
  }

  //get all
  getPersonalDetailsList(): Observable<PersonalDetails[]> {
    return this.http.get<PersonalDetails[]>("http://localhost:1002/getallpersonaldetails");
  }

  //get by email id
  getbyidurl = "http://localhost:1002/getpersonaldetailsbyemialId"
  getbyEmailId(emailId: string): Observable<PersonalDetails> {
    return this.http.get<PersonalDetails>(`${this.getbyidurl}/${emailId}`);

  }


  //method to update by email id
  updatePersonalDetailsByEmailId(emailId: string, personal: PersonalDetails): Observable<PersonalDetails[]> {
    return this.http.put<PersonalDetails[]>(`http://localhost:1002/updatebyEmailid/${emailId}`, personal);
  }

  /* method to delete by email id*/
  deleteurl = "http://localhost:1002/deletePersonalDetails"
  deleteByEmailId(emailId: string): Observable<Object> {
    return this.http.delete(`${this.deleteurl}/${emailId}`);
  }
}
