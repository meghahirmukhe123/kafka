package com.ProductDetails.kafka;
//
//import org.springframework.stereotype.Service;
//
//import com.ProductDetails.model.userbill;
//
//import org.apache.kafka.clients.admin.NewTopic;
//
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.kafka.core.KafkaTemplate;
//import org.springframework.kafka.support.KafkaHeaders;
//import org.springframework.messaging.Message;
//import org.springframework.messaging.simp.SimpMessagingTemplate;
//import org.springframework.messaging.support.MessageBuilder;
//
//
//@Service
//public class productDetailsProducer {
//	
//	@Autowired
//	private NewTopic topic;
//	
//	private KafkaTemplate<String, userbill> kafkaTemplate;
//	
//	private final Logger logger= LoggerFactory.getLogger(productDetailsProducer.class);
//	
//	public productDetailsProducer(NewTopic topic ,KafkaTemplate<String, userbill> kafkaTemplate)
//	{
//		this.topic=topic;
//		this.kafkaTemplate=kafkaTemplate;
//	}
//	
//	public void sendMessage(userbill uBill)
//	{
//		logger.info(String.format("event => %s",uBill.toString()));
//		
//		//create msg
//		//will send this mesage to kafka topic
//		Message<userbill> message= MessageBuilder
//				.withPayload(uBill)
//				.setHeader(KafkaHeaders.TOPIC, topic.name())  //key,value  => topic,topicName
//				.build();
//		
//		kafkaTemplate.send(message);
//	}
//
//	
////	 private final SimpMessagingTemplate messagingTemplate;
////
////	    @Autowired
////	    public productDetailsProducer(SimpMessagingTemplate messagingTemplate) {
////	        this.messagingTemplate = messagingTemplate;
////	    }
////
////	    public void sendToTopic(String message) {
////	        // Send a message to the "/topic" destination
////	        messagingTemplate.convertAndSend("/bill", message);
////	    }
//}




import com.ProductDetails.model.userbill;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.Message;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Service;

@Service
public class productDetailsProducer {

    private KafkaTemplate<String, userbill> kafkaTemplate;
    private final Logger logger = LoggerFactory.getLogger(productDetailsProducer.class);

    @Autowired
    private SimpMessagingTemplate messagingTemplate; // Make sure you have this bean configured

    @Autowired
    public productDetailsProducer(KafkaTemplate<String, userbill> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void sendMessage(userbill uBill) {
        logger.info(String.format("event => %s", uBill.toString()));

        // Create a message to send to Kafka
        Message<userbill> message = MessageBuilder
                .withPayload(uBill)
                .setHeader(KafkaHeaders.TOPIC, "bill") // Change to your Kafka topic name
                .build();

        // Send the message to Kafka
        kafkaTemplate.send(message);

        // Send the same message to WebSocket clients
        sendToWebSocketClients(uBill.toString());
    }

    // Send a message to WebSocket clients using SimpMessagingTemplate
    private void sendToWebSocketClients(String message) {
        // Send a message to the "/bill" destination (matching your Kafka topic)
        messagingTemplate.convertAndSend("/bill", message);
    }
}

