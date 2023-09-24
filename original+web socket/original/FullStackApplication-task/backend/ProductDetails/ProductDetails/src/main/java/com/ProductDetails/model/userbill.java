package com.ProductDetails.model;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "userbill")
public class userbill {

	private String msg;
	private ProductDetails productDetails;
	
}
