package com.Bill.kafka;

import org.springframework.stereotype.Service;
import com.ProductDetails.model.userbill;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;

@Service
public class billConsumer {
	
private static final Logger logger= LoggerFactory.getLogger(billConsumer.class);
	
	
	//following method is to subscribe kafka topic
	@KafkaListener(topics = "${spring.kafka.topic.name}", groupId = "${spring.kafka.consumer.group-id}" , containerFactory = "kafkaListenerContainerFactory")
	public void consume(userbill ev)
	{
		logger.info(String.format("User bill received in bill service => %s", ev.toString()));
		
		
	}

}

//@Service
//public class billConsumer {
//    private String latestKafkaMessage = ""; // Store the latest Kafka message
//
//    // ... Other methods ...
//
//    // Method to get the latest Kafka message
//    public String getLatestKafkaMessage() {
//        return latestKafkaMessage;
//    }
//
//    @KafkaListener(topics = "${spring.kafka.topic.name}", groupId = "${spring.kafka.consumer.group-id}", containerFactory = "kafkaListenerContainerFactory")
//    public void consume(userbill ev) {
//        // Handle the Kafka message and store it in the latestKafkaMessage variable
//        latestKafkaMessage = "User bill received in bill service => " + ev.toString();
//
//        // ... Other processing ...
//    }
//}
