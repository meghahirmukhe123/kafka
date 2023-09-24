import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  msg='';
  user=new User();


  constructor(private loginservice:LoginService){}
  ngOnInit(): void {
    
  }

  loginUser()
  {

    
    if(this.user.name !=='' && this.user.password !=='')
    {
      
      var response = this.loginservice.generateToken(this.user)
      .subscribe
      (
        (response :any)=>
        {
          console.log("token",response);
          this.loginservice.loginuser(response);
          window.location.href="/dashboard";
        },
        
          (error:any) =>
          {
            alert("Failed to login");

          }

        
      )
    }
    else{
      alert("feilds empty");
    }
  }

}
