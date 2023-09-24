import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDetails } from 'src/app/product-details';
import { CountuserbillService } from 'src/app/services/countuserbill.service';

import { ProductdetailsService } from 'src/app/services/productdetails.service';


@Component({
  selector: 'app-create-product-details',
  templateUrl: './create-product-details.component.html',
  styleUrls: ['./create-product-details.component.css']
})
export class CreateProductDetailsComponent implements OnInit {
  product: ProductDetails = new ProductDetails();

  constructor(
    private productsService: ProductdetailsService,
   
    private router: Router,
    private countservice: CountuserbillService
    
  ) {}

  ngOnInit(): void {}

 
  
  
  saveProductDetails() {
    this.productsService.saveProductDetails(this.product).subscribe(
      () => {
        console.log('Product Details saved successfully');
  
        // Calculate PriceWithGST and Total
        const priceWithGST = this.product.price * (this.product.gst / 100);
        const total = this.product.price + priceWithGST;
  
        //Create a UserBill object with the calculated values
        const productWithBill: ProductDetails = {
          emailId: this.product.emailId,
          productName: this.product.productName,
          price: this.product.price,
          date: this.product.date,
          gst: this.product.gst,
          priceWithGST: priceWithGST,
          totalBillRs: total + ' Rs',
          productId: ''
        };
  
       
        // Increment the count when a new bill is generated
             this.countservice.incrementCount();
  
            // Refresh the badge count after successfully saving
            this.countservice.getCount(); // This should fetch the updated count
            
            this.goToProductDetailList();
       
      },
      (error) => {
        console.error('Error saving Product Details:', error);
        // Handle the error here if needed
      }
    );
  }
  
  goToProductDetailList() {
    this.router.navigate(['/productlist']);
  }

  onSubmit() {
    console.log(this.product);
    this.saveProductDetails();
  }
}


// create-product-details.component.ts

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { ProductDetails } from 'src/app/product-details';
// import { CountuserbillService } from 'src/app/services/countuserbill.service';

// import { ProductdetailsService } from 'src/app/services/productdetails.service';

// @Component({
//   selector: 'app-create-product-details',
//   templateUrl: './create-product-details.component.html',
//   styleUrls: ['./create-product-details.component.css']
// })
// export class CreateProductDetailsComponent implements OnInit {
//   product: ProductDetails = new ProductDetails();

//   constructor(
//     private productsService: ProductdetailsService,
//     private router: Router,
//     private countservice: CountuserbillService
//   ) {}

//   ngOnInit(): void {}

//   saveProductDetails() {
//     this.productsService.saveProductDetails(this.product).subscribe(
//       () => {
//         console.log('Product Details saved successfully');

//         // Calculate PriceWithGST and Total
//         const priceWithGST = this.product.price * (this.product.gst / 100);
//         const total = this.product.price + priceWithGST;

//         // Increment the count when a new bill is generated
//         this.countservice.incrementCount();

//         this.goToProductDetailList();
//       },
//       (error) => {
//         console.error('Error saving Product Details:', error);
//         // Handle the error here if needed
//       }
//     );
//   }

//   goToProductDetailList() {
//     this.router.navigate(['/productlist']);
//   }

//   onSubmit() {
//     console.log(this.product);
//     this.saveProductDetails();
//   }
// }
