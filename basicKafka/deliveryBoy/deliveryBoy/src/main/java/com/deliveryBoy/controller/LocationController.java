package com.deliveryBoy.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.deliveryBoy.service.KafkaService;

@RestController
@RequestMapping("/location")
public class LocationController {
	
	@Autowired
	private KafkaService kafkaService;
	
	
	@PostMapping("/update")
	public ResponseEntity<?> updateLocation()
	{
		
		//let get location for 100000 times
		for(int i=0;i<=100000;i++)
		{
		this.kafkaService.updatelocation("(  "+Math.round(Math.random()*100)+","+Math.round(Math.random()*100) +")");
	
		}
		return new ResponseEntity<>(Map.of("message","Location updated"),HttpStatus.OK);
	}

}
