package com.ProductDetails.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.ProductDetails.model.ProductDetails;

public interface ProductRepo extends MongoRepository<ProductDetails, String> {

//	ProductDetails findByemailId(String emailId);

	//List<ProductDetails> findByemailId(String emailId);

	String deleteByemailId(String emailId);

	// for update
	ProductDetails findByEmailId(String emailId);

}
