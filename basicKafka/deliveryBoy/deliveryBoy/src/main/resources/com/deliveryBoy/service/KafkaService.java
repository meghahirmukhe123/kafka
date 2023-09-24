package com.deliveryBoy.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import com.deliveryBoy.KafkaConfig.AppConstants;

@Service
public class KafkaService {
	
	
	private Logger logger =LoggerFactory.getLogger(KafkaService.class);
	
	@Autowired
	//kafka template= use to send message
	private KafkaTemplate<String,String> kafkaTemplate;
	//                    ->key,value<-  
	
	//to produce data(location)
	public boolean updatelocation(String location)
	{
		this.kafkaTemplate.send(AppConstants.LOCATION_TOPIC_NAME,location);
		//                                      ->topic-name , format <-                
		
		this.logger.info("meassage produced");
		return true;
	}

}
