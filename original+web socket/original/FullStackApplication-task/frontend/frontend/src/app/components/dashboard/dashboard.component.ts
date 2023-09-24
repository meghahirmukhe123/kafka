

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountuserbillService } from 'src/app/services/countuserbill.service';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public loggedIn = false;
  userBillCount: number = 0;
  userdetails: any;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private countservice: CountuserbillService

  ) { }

  ngOnInit(): void {
    // Subscribe to userBillCount$ to get the count
    this.countservice.userBillCount$.subscribe((count) => {
      this.userBillCount = count;
    });

    // Check if the user is logged in
    this.loggedIn = this.loginService.isLoggedIn();
    if (!this.loggedIn) {
      this.router.navigate(['/login']); // Redirect to login if not logged in
    }
  }
  logoutUser() {
    this.loginService.logout();
    // location.reload();
    this.router.navigate(['/login']); // Redirect to login after logout
  }
}
