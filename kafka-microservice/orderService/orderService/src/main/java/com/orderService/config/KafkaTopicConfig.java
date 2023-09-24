package com.orderService.config;

import org.apache.kafka.clients.admin.NewTopic;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.TopicBuilder;


//this class is to define bean
@Configuration
public class KafkaTopicConfig {
	
	//to retrive topic name
//	@Value("${spring.kafka.topic.name }")  //we have taken "spring.kafka.topic.name" this from application.properties
//	public String topicName;
	
	//spring bean for kafka topic
	
//	@Bean
//	public NewTopic topic()
//	{
//		return TopicBuilder.name(topicName)  //to create instance of new topic
//				//.partitions(3)  //use this only if we want to made partitions of topic
//				.build();
//	}
	
	
	@Bean
    public NewTopic topic(@Value("${spring.kafka.topic.name}") String topicName) {
        return TopicBuilder.name(topicName).build();
    }
	
	

}
