package com.UserDetails.model;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class PersonalDetails {
	
	private String personalId;
	private String emailId;
	private String gender;
	private int age;
	private ProductDetails productDetails;
	

	

}
