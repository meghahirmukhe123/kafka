
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountuserbillService {
  private userBillCountSubject = new BehaviorSubject<number>(0);
  public userBillCount$ = this.userBillCountSubject.asObservable();

  constructor() {
    // Initialize the count from local storage if available
    const storedCount = localStorage.getItem('userBillCount');
    if (storedCount) {
      this.userBillCountSubject.next(Number(storedCount));
    } else {
      // Reset the count to 0 if not found in local storage
      this.userBillCountSubject.next(0);
      // Store the initial count in local storage
      localStorage.setItem('userBillCount', '0');
    }
  }

  // Method to increment the count
  incrementCount() {
    this.userBillCountSubject.next(this.userBillCountSubject.value + 1);
    // Store the updated count in local storage
    localStorage.setItem('userBillCount', this.userBillCountSubject.value.toString());
  }

  // Method to decrement the count (if needed)
  decrementCount() {
    this.userBillCountSubject.next(this.userBillCountSubject.value - 1);
    // Store the updated count in local storage
    localStorage.setItem('userBillCount', this.userBillCountSubject.value.toString());
  }

  // Method to get the current count
  getCount(): number {
    return this.userBillCountSubject.value;
  }
}



