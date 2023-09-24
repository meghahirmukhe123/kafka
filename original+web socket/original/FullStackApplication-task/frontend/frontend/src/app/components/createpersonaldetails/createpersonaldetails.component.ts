import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalDetails } from 'src/app/personal-details';
import { PersonaldetailsService } from 'src/app/services/personaldetails.service';

@Component({
  selector: 'app-createpersonaldetails',
  templateUrl: './createpersonaldetails.component.html',
  styleUrls: ['./createpersonaldetails.component.css']
})
export class CreatepersonaldetailsComponent implements OnInit {


  personaldetails: PersonalDetails = new PersonalDetails();

  constructor(private personalservice: PersonaldetailsService, private router: Router) {}

  ngOnInit(): void {}

  savePersonalDetails() {
    this.personalservice.addPersonalDetails(this.personaldetails)
      .subscribe(
        () => {
          console.log('Data saved successfully');
          this.goToPersonalDetailsList();
        },
        (error) => {
          console.error(error);
          // Handle the error here if needed
        }
      );
  }
  
  goToPersonalDetailsList() {
    this.router.navigate(['/personaldetailslist']);
  }

  onSubmit() {
    this.savePersonalDetails();
  }

}
