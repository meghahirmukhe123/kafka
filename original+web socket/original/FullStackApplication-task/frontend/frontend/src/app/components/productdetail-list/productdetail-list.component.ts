import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProductDetails } from 'src/app/product-details';
import { ProductdetailsService } from 'src/app/services/productdetails.service';

@Component({
  selector: 'app-productdetail-list',
  templateUrl: './productdetail-list.component.html',
  styleUrls: ['./productdetail-list.component.css'],
})
export class ProductdetailListComponent implements OnInit {
  product: ProductDetails[] = [];
  searchEmail: string = '';
  displayedUser: ProductDetails | null = null;
  errorMessage: string | undefined;


  constructor(
    private productsService: ProductdetailsService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails() {
    this.productsService.getProductDetails().subscribe(
      (data) => {
        this.product = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateProductDetailsbyemailid(emailId: string) {
    this.router.navigate(['updateproduct', emailId]);
  }


  deletebyEmailId(emailId: string) {
    this.productsService.deleteProductDetailsByEmailID(emailId).subscribe(
      (data) => {
        console.log(data);
        this.getProductDetails();
        this.snackBar.open('Data deleted', 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  searchUser() {
    const foundUser = this.product.find((user) => user.emailId === this.searchEmail);
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
