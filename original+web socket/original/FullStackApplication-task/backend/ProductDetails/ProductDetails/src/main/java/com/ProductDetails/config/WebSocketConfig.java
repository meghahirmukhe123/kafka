package com.ProductDetails.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.messaging.simp.config.MessageBrokerRegistry;
//import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
//import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
//import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;
//import org.springframework.web.socket.server.support.DefaultHandshakeHandler;
//import org.springframework.web.socket.server.support.HttpSessionHandshakeInterceptor;
//import org.springframework.web.socket.server.support.OriginHandshakeInterceptor;
//
//@Configuration
//@EnableWebSocketMessageBroker
//public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
//	
//	 @Override
//	    public void configureMessageBroker(MessageBrokerRegistry config) {
//		 config.enableSimpleBroker("/bill", "/bill/notifications");
//	        config.setApplicationDestinationPrefixes("/app");
//	    }
//
//	 @Override
//	    public void registerStompEndpoints(StompEndpointRegistry registry) {
//	        registry.addEndpoint("/ws") // WebSocket endpoint
//	                .setAllowedOrigins("*") // Allow connections from any origin (you can restrict this to specific origins)
//	                .addInterceptors(new OriginHandshakeInterceptor()) // Add the OriginHandshakeInterceptor
//	                .addInterceptors(new HttpSessionHandshakeInterceptor()) // Add the HttpSessionHandshakeInterceptor
//	                .setHandshakeHandler(handshakeHandler()); // Set the handshake handler
//	    }
//
//	    @Bean
//	    public DefaultHandshakeHandler handshakeHandler() {
//	        return new DefaultHandshakeHandler();
//	    }
//
//}


//import org.springframework.context.annotation.Configuration;
//import org.springframework.messaging.simp.config.MessageBrokerRegistry;
//import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
//import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
//
//import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;
//
//@Configuration
//@EnableWebSocketMessageBroker
//public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
//
//    @Override
//    public void registerStompEndpoints(StompEndpointRegistry registry) {
//        // Set allowed origins for WebSocket connections
//        registry.addEndpoint("/ws")
//                .setAllowedOrigins("http://localhost:4200")
//                .withSockJS(); // Enable SockJS
//    }
//
//    @Override
//    public void configureMessageBroker(MessageBrokerRegistry config) {
//        config.enableSimpleBroker("/bill/updates", "/bill/notifications");
//        config.setApplicationDestinationPrefixes("/app");
//    }
//}



import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

 @Override
 public void registerStompEndpoints(StompEndpointRegistry registry) {
     // Set allowed origins for WebSocket connections
     registry.addEndpoint("/ws")
             .setAllowedOrigins("http://localhost:4200")
             .withSockJS(); // Enable SockJS
 }

 @Override
 public void configureMessageBroker(MessageBrokerRegistry config) {
     config.enableSimpleBroker("/bill"); // Make sure this matches the subscription path in Angular
     config.setApplicationDestinationPrefixes("/app");
 }
}
