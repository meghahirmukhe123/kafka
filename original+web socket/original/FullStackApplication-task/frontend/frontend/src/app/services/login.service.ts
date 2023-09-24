import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 

  url = 'http://localhost:1005/auth'

  constructor(private http: HttpClient) { }

 

  // generateToken(credentials: any): Observable<any> {
  //   return this.http.post(`${this.url}/token`, credentials);
  // }

  generateToken(user:User): Observable<string> {
    console.log('generate token called hitting utl:' +`${this.url}/token`);
    var token = this.http.post<string>(`${this.url}/token`,{"username":user.name, "password":user.password});
    return token;
  }


  //for login user
  loginuser(token: string) {
    localStorage.setItem("token", token);
    return true;
  }

  //getting token
  getToken() {
    localStorage.getItem('token');
  }

  //to chekc whether user is logged in or not
  isLoggedIn() {

    let token = localStorage.getItem("token");
    if (token == undefined || token === '' || token == null) {
      return false;
    }
    else {
      return true;
    }


  }

  //to check user is logged out 
  logout() {
    localStorage.removeItem('token');
    return true;
    // window.location.href="/login";
  }
}
