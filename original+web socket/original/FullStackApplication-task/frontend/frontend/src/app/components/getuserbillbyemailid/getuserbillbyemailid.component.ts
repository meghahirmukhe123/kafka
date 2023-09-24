import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetails } from 'src/app/product-details';
import { ProductdetailsService } from 'src/app/services/productdetails.service';
import { UserBillServiceService } from 'src/app/services/user-bill-service.service';
import { UserBill } from 'src/user-bill';



@Component({
  selector: 'app-getuserbillbyemailid',
  templateUrl: './getuserbillbyemailid.component.html',
  styleUrls: ['./getuserbillbyemailid.component.css']
})



export class GetuserbillbyemailidComponent implements OnInit {
  emailId: string | null = null;
  bills: ProductDetails[] = []; // Array to store bill details

  constructor(private route: ActivatedRoute, private getBillService: ProductdetailsService) {
    const emailIdParam = this.route.snapshot.paramMap.get('emailId');
    this.emailId = emailIdParam !== null ? emailIdParam : ''; // Provide a default value
  }

  ngOnInit(): void {
    this.getBill();
  }

  getBill() {
    if (this.emailId) { // Check if emailId is not null or empty
      this.getBillService.getProductDetailsByEmailId(this.emailId).subscribe(
        (data: ProductDetails) => {
          // Push the retrieved bill to the array
          this.bills.push(data);
        },
        (error) => {
          console.error('Error fetching bill:', error);
        }
      );
    } else {
      console.error('Email ID parameter not found in the URL.');
    }
  }
}

