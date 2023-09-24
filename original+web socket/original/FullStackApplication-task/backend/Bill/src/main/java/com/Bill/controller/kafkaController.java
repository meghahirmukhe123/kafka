package com.Bill.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Bill.kafka.billConsumer;

@RestController
public class kafkaController {

//	private final billConsumer consumer;
//
//    @Autowired
//    public kafkaController(billConsumer consumer) {
//        this.consumer = consumer;
//    }
//
//    // Endpoint to fetch Kafka message
//    @GetMapping("/getKafkaMessage")
//    public String getKafkaMessage() {
//        // Retrieve the Kafka message from your Kafka consumer service
//        String kafkaMessage = consumer.getLatestKafkaMessage(); // Implement this method in your consumer service
//        return kafkaMessage;
//    }
}
