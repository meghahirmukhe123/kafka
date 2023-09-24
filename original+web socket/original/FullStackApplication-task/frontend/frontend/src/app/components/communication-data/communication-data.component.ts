import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from 'src/app/services/userdetails.service';


@Component({
  selector: 'app-communication-data',
  templateUrl: './communication-data.component.html',
  styleUrls: ['./communication-data.component.css']
})
export class CommunicationDataComponent implements OnInit{
  
  
  emailId: string = '';
  userData: any = null;
  userNotFound: boolean = false;

  constructor(private dataService: UserdetailsService) {} // Update with your actual service
  ngOnInit(): void {
   
  }

  getUserData() {
    this.dataService.getCommunicationData(this.emailId).subscribe(
      (data: any) => {
        if (data) {
          this.userData = data;
          this.userNotFound = false;
        } else {
          this.userData = null;
          this.userNotFound = true;
        }
      },
      error => {
        console.error('Error fetching user data:', error);
        
      }
    );
  }



}
