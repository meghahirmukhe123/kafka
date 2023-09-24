package com.IdentityService.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.IdentityService.dto.AuthRequest;
import com.IdentityService.dto.event;
import com.IdentityService.entity.UserCredentials;
import com.IdentityService.kafka.authProducer;

@RestController
public class eventController {
	@Autowired
	private authProducer producer;
	
	public eventController(authProducer producer) {
		super();
		this.producer = producer;
	}
	
	@PostMapping("/auth")
	//@RequestBody => use to convert json into java object
	public String placeOrder(@RequestBody UserCredentials cre)
	{
		
		event evt= new event();
		evt.setStatus("PENDING");
		evt.setMessage("User registration");
		evt.setCredentials(cre);
		
		producer.sendMessage(evt);
		return "Registration done successfully";
		
	}
	
	
	

}
