import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserdetailsService } from 'src/app/services/userdetails.service';
import { UserDetails } from 'src/app/user-details';

@Component({
  selector: 'app-updateuserdetails',
  templateUrl: './updateuserdetails.component.html',
  styleUrls: ['./updateuserdetails.component.css']
})
export class UpdateuserdetailsComponent implements OnInit {

  emailId!: string;
  userdetails: UserDetails = new UserDetails();


  constructor(private userdetailsService: UserdetailsService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }
  ngOnInit(): void {

    this.emailId = this.route.snapshot.params[`emailId`];

    this.userdetailsService.getByEmailId(this.emailId)
      .subscribe(
        data => {
          this.userdetails = data;
          console.log("updateuserdetailscomponentts", data);
        }),
      (error: any) => console.log(error);



  }

  onSubmit() {
    this.userdetailsService.updateByEmailId(this.emailId, this.userdetails)
      .subscribe(
        date => {
          this.goToUserDetailsList();

        },
        error => {
          console.log(error);
        }
      )

  }

  goToUserDetailsList() {

    this.router.navigate(['/userdetailslist']);


  }

}
