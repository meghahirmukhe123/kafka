package com.emailService.Kafka;

import org.slf4j.Logger;

import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import com.baseDomain.model.OrderEvent;

@Service
public class EmailConsumer {
	
	private static final Logger logger= LoggerFactory.getLogger(EmailConsumer.class);
	
	
	//following method is to subscribe kafka topic
	@KafkaListener(topics = "${spring.kafka.topic.name}", groupId = "${spring.kafka.consumer.group-id}")
	public void consume(OrderEvent event)
	{
		logger.info(String.format("Order event received in stock service => %s", event.toString()));
		
		
	}

}
