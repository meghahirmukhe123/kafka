package com.ProductDetails.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.ProductDetails.model.userbill;

public interface UserBillRepository extends MongoRepository<userbill,String>{

}
