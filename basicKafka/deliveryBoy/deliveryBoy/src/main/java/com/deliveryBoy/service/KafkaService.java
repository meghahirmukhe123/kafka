package com.deliveryBoy.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import com.deliveryBoy.KafkaConfig.AppConstants;

@Service
public class KafkaService {
	
	@Autowired
	private KafkaTemplate<String, String> kafkaTemplate;
	
	public Logger logger = LoggerFactory.getLogger(KafkaService.class);
	
	public boolean updatelocation(String location)
	{
		this.kafkaTemplate.send(AppConstants.LOCATION_TOPIC_NAME,location);
		this.logger.info("message produced");
		return true;
	}

}
