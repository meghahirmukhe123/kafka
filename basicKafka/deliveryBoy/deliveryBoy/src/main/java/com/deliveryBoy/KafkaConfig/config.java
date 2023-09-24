package com.deliveryBoy.KafkaConfig;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.TopicBuilder;

@Configuration
public class config {
	
	
	//To create topic
	@Bean
	public NewTopic topic()
	{
		return TopicBuilder
				.name(AppConstants.LOCATION_TOPIC_NAME) //to set name of topic
				.build();
				
	}

}
