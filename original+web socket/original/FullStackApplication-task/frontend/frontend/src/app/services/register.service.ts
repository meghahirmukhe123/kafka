import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  public registerUser(user:User):Observable<any>{

    return this.http.post<any>("http://localhost:1005/auth/register",user);
    
  }
}
