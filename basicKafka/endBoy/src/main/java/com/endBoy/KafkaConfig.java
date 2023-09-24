package com.endBoy;

import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.annotation.KafkaListener;

@Configuration
public class KafkaConfig {
	
	
	@KafkaListener(topics = AppConstants.LOCATION_UPDATE_TOPIC,groupId = AppConstants.GROUP_ID)   //what ever msg will produce to listen those this annotation is used
	//method which will execute when msg will produce
	public void updatedLocation(String value)
	{
		
		System.out.println(value);
		
	}

}
