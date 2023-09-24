import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { PersonalDetails } from 'src/app/personal-details';
import { PersonaldetailsService } from 'src/app/services/personaldetails.service';

@Component({
  selector: 'app-personaldetailslist',
  templateUrl: './personaldetailslist.component.html',
  styleUrls: ['./personaldetailslist.component.css']
})
export class PersonaldetailslistComponent implements OnInit {


  personalDetails: PersonalDetails[] = []; // Initialize an array to hold personal details
  displayedUser: PersonalDetails | null = null; // Initialize a variable to display a single user
  searchEmail: string = '';
 
  

  constructor(private personalservice:PersonaldetailsService,
    private router:Router,
    private snackBar: MatSnackBar)
  {

  }
  ngOnInit(): void {
    
    this.getPersonalDetails();
  }


   //to get all userdetails
   getPersonalDetails()
   {
     this.personalservice.getPersonalDetailsList()
     .subscribe(
       data=>
       {
         this.personalDetails = data;
         console.log(data);
       }
     );
   }
 
   //update by email id
   updatebyEmailId(emailId:string)
   {
     this.router.navigate(['updatepersonaldetails',emailId]);
   }
 
   //delete by email id
   deletebyEmailId(emailId:string)
   {
     this.personalservice.deleteByEmailId(emailId).subscribe(

      data => {
        console.log(data);

        this.snackBar.open('Data deleted', 'Close', {
          duration: 3000, // Duration in milliseconds
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });

        this.getPersonalDetails(); // Refresh user details after deletion
      },
      error => {
        console.error(error);
      }



     )
   }
 
 
   searchUser() {
     const foundUser = this.personalDetails.find(user => user.emailId === this.searchEmail);
     if (foundUser) {
       this.displayedUser = foundUser;
     } else {
       this.displayedUser = null;
       alert('Email ID not found.');
     }
   }
 
   clearSearch() {
     this.searchEmail = '';
     this.displayedUser = null;
   }
 
 
 
 

}

