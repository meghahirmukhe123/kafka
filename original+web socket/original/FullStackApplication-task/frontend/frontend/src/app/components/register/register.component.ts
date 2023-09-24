import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user=new User();
  msg='';

  constructor(private router:Router, private registerService:RegisterService)
  {

  }
  ngOnInit(): void {
    
  }

  registerUser() {

    this.registerService.registerUser(this.user).subscribe(
     (ans:any)=>{
      alert("Registration successful!");
      this.router.navigate(['/login']);
     }
    
     
    )
    

  }

}
