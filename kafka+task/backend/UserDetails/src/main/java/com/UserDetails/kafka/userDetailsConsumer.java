package com.UserDetails.kafka;



import org.slf4j.Logger;

import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import com.IdentityService.dto.event;

@Service
public class userDetailsConsumer {
	
private static final Logger logger= LoggerFactory.getLogger(userDetailsConsumer.class);
	
	
	//following method is to subscribe kafka topic
	@KafkaListener(topics = "${spring.kafka.topic.name}", groupId = "${spring.kafka.consumer.group-id}" , containerFactory = "kafkaListenerContainerFactory")
	public void consume(event ev)
	{
		logger.info(String.format("User registration data received in user details service => %s", ev.toString()));
		
		
	}


}
