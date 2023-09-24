import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonalDetails } from 'src/app/personal-details';
import { PersonaldetailsService } from 'src/app/services/personaldetails.service';

@Component({
  selector: 'app-updatepersonaldeatils',
  templateUrl: './updatepersonaldeatils.component.html',
  styleUrls: ['./updatepersonaldeatils.component.css']
})
export class UpdatepersonaldeatilsComponent implements OnInit {

  emailId!: string;
  personal: PersonalDetails = new PersonalDetails();

  constructor(
    private personaldetailservice: PersonaldetailsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.emailId = this.route.snapshot.params['emailId'];

    this.personaldetailservice.getbyEmailId(this.emailId)
      .subscribe(
        (data : any) => {
          this.personal = data[0]; //because service returns an array of PersonalDetails
          console.log('data is:', data);
        },
        error => {
          console.log('Error fetching data:', error);
        }
      );
  }

  onSubmit() {
    this.personaldetailservice.updatePersonalDetailsByEmailId(this.emailId, this.personal)
      .subscribe(
        updatedPersonalList => {
          console.log('Updated data:', updatedPersonalList);
          this.router.navigate(['/personaldetailslist']); // Navigate back to the list
        },
        error => {
          console.log('Error updating data:', error);
        }
      );
  }
}





