package com.IdentityService.dto;

import com.IdentityService.entity.UserCredentials;



import lombok.AllArgsConstructor;
import lombok.Data;

import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor

public class event {
	private String message;
	private String status;
	private UserCredentials credentials;

}
