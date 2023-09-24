package com.PersonalDetails.kafka;

import org.slf4j.Logger;

import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import com.IdentityService.dto.event;




@Service
public class personalDetailsConsumer {
private static final Logger logger= LoggerFactory.getLogger(personalDetailsConsumer.class);
	
	
	//following method is to subscribe kafka topic
	@KafkaListener(topics = "${spring.kafka.topic.name}", groupId = "${spring.kafka.consumer.group-id}")
	public void consume(event ev)
	{
		logger.info(String.format("User registration data received in personaldetails service => %s", ev.toString()));
		
		
	}

}
