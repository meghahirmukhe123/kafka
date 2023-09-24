package com.ProductDetails.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ProductDetails.model.userbill;
import com.ProductDetails.repo.UserBillRepository;

@Service
public class UserBillService {
	 private int userBillCount = 0; // Initialize count to 0

	    @Autowired
	    private UserBillRepository userBillRepository;

	    // Other methods...

	    public userbill saveUserBill(userbill ubill) {
	        userbill savedBill = userBillRepository.save(ubill);
	        // Increment the count when a new userbill is generated
	        userBillCount++;
	        return savedBill;
	    }

	    public int getUserBillCount() {
	        return userBillCount;
	    }

}
