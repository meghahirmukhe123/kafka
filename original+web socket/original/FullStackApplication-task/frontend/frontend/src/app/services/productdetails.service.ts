
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { ProductDetails } from '../product-details';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {
  constructor(
    private http: HttpClient,
   
  ) {}

  // Save user details
  public saveProductDetails(product: ProductDetails): Observable<any> {
    return this.http.post('http://localhost:1003/saveProductDetails', product)
  }

  // Get all product details
  public getProductDetails(): Observable<ProductDetails[]> {
    return this.http.get<ProductDetails[]>('http://localhost:1003/getallproducts');
  }

  // Get product details by email id
  public getProductDetailsByEmailId(emailId: string): Observable<ProductDetails> {
    return this.http.get<ProductDetails>(`http://localhost:1003/getproductbyemailid/${emailId}`);
  }

  // Update product details by email id
  public updateProductByEmailId(emailId: string, product: ProductDetails): Observable<ProductDetails[]> {
    return this.http.put<ProductDetails[]>(`http://localhost:1003/updatebyemailid/${emailId}`, product);
  }

  // Delete product details by email id
  public deleteProductDetailsByEmailID(emailId: string): Observable<Object> {
    return this.http.delete(`http://localhost:1003/deleteProductdetails/${emailId}`)
  }


}

