package com.orderService.kafka;

import org.apache.kafka.clients.admin.NewTopic;



import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Service;

import com.baseDomain.model.OrderEvent;



@Service
public class OrderProducer {
	
	
	@Autowired
	private NewTopic topic;
	
	//using kafka template to send event or msg to kafka topic
	private KafkaTemplate< String, OrderEvent> kafkaTemplate;
	
	
	 private final Logger logger= LoggerFactory.getLogger(OrderProducer.class);
	
	public OrderProducer(NewTopic topic ,KafkaTemplate<String, OrderEvent> kafkaTemplate)
	{
		this.topic=topic;
		this.kafkaTemplate=kafkaTemplate;
	}
	
	
	public void sendMessage(OrderEvent event)
	{
		logger.info(String.format("Order event => %s",event.toString()));
		
		//create msg
		//will send this mesage to kafka topic
		Message<OrderEvent> message= MessageBuilder
				.withPayload(event)
				.setHeader(KafkaHeaders.TOPIC, topic.name())  //key,value  => topic,topicName
				.build();
		
		kafkaTemplate.send(message);
	}

}
