package com.UserDetails.kafka;

import org.springframework.stereotype.Service;

import com.ProductDetails.model.userbill;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
@Service
public class userDetailsConsumer {
	
private static final Logger logger= LoggerFactory.getLogger(userDetailsConsumer.class);
	
	
	//following method is to subscribe kafka topic
	@KafkaListener(topics = "${spring.kafka.topic.name}", groupId = "${spring.kafka.consumer.group-id}" , containerFactory = "kafkaListenerContainerFactory")
	public void consume(userbill ev)
	{
		logger.info(String.format("User bill received in user details service => %s", ev.toString()));
		
		
	}

}
