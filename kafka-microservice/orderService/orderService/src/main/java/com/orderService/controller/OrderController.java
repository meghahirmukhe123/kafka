package com.orderService.controller;

import java.util.UUID;

import org.apache.kafka.common.Uuid;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.baseDomain.model.Order;
import com.baseDomain.model.OrderEvent;
import com.orderService.kafka.OrderProducer;

@RestController
@RequestMapping("/api/v1")
public class OrderController {
	
	private OrderProducer orderProducer;

	
	
	public OrderController(OrderProducer orderProducer) {
		super();
		this.orderProducer = orderProducer;
	}
	
	@PostMapping("/orders")
	//@RequestBody => use to convert json into java object
	public String placeOrder(@RequestBody Order order)
	{
		order.setOrderId(UUID.randomUUID().toString());
		OrderEvent orderEvent= new OrderEvent();
		orderEvent.setStatus("PENDING");
		orderEvent.setMessage("order status is in pending state");
		orderEvent.setOrder(order);
		
		orderProducer.sendMessage(orderEvent);
		return "Order placed successfully";
		
	}
	

}
