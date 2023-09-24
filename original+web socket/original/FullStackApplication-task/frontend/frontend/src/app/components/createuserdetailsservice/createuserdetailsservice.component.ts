import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserdetailsService } from 'src/app/services/userdetails.service';

import { UserDetails } from 'src/app/user-details';

@Component({
  selector: 'app-createuserdetailsservice',
  templateUrl: './createuserdetailsservice.component.html',
  styleUrls: ['./createuserdetailsservice.component.css']
})
export class CreateuserdetailsserviceComponent  implements OnInit {

  userdetails: UserDetails = new UserDetails();

  constructor(private userdetailsservice: UserdetailsService,private router:Router) 
  {

  }
  ngOnInit(): void {
    
  }


  //to save userdetails in database
  saveUserDetails() {
    this.userdetailsservice.addUserDetails(this.userdetails)
      .subscribe(
        (data) => {
          console.log(data);
          this.goToUserDetailsList();
        },
        (error) => {
          
          alert("Email ID already exists. Please use another email ID.");
        }
      );
  }
  
  goToUserDetailsList()
  {

    this.router.navigate(['/userdetailslist']);
   

  }

  onSubmit()
  {
    console.log(this.userdetails);
    this.saveUserDetails();
  }
}


  
