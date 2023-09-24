

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetails } from 'src/app/product-details';
import { ProductdetailsService } from 'src/app/services/productdetails.service';


@Component({
  selector: 'app-update-productdetails',
  templateUrl: './update-productdetails.component.html',
  styleUrls: ['./update-productdetails.component.css']
})
export class UpdateProductdetailsComponent implements OnInit {

  emailId!: string;
  product: ProductDetails = new ProductDetails();

  constructor(private productService: ProductdetailsService,
    private router: Router,
    private route: ActivatedRoute) {

  }



  ngOnInit(): void {
    this.emailId = this.route.snapshot.params[`emailId`];

    this.productService.getProductDetailsByEmailId(this.emailId)
      .subscribe(
        data => {
          this.product = data;
          console.log("updateProductdetailscomponentts", data);
        },
        error => {
          console.log(error);
        }
      );
  }



  onSubmit() {
    this.productService.updateProductByEmailId(this.emailId, this.product)
      .subscribe(
        date => {

          this.goToProductDetailsList();

        },
        error => {
          console.log(error);
        }
      )

  }





  goToProductDetailsList() {

    this.router.navigate(['/productlist']);


  }


}


