import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthinterceptorService implements HttpInterceptor {

  constructor(private loginservice:LoginService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        

    let newReq=req;
    let token=this.loginservice.getToken();


    console.log("INTERCEPTOR",token);

    if(token != null)
    {
        newReq= newReq.clone({setHeaders:{Authorization:`Bearer ${token}`}})
    }

    return next.handle(newReq);
    

}
}
