package com.ProductDetails.config;

import org.springframework.context.annotation.Bean;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
@EnableWebMvc
public class CorsConfig implements WebMvcConfigurer {
	
	 @Override
	    public void addCorsMappings(CorsRegistry registry) {
	        registry.addMapping("/**")
	                .allowedOrigins("http://localhost:4200") // Update with your Angular app URL
	                .allowedMethods("GET", "POST", "PUT", "DELETE");
	    }
	 
	 
	 @Bean
	    public CorsFilter corsFilter() {
	        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	        CorsConfiguration config = new CorsConfiguration();
	        config.setAllowCredentials(true); // Allow credentials (cookies)
	        config.addAllowedOrigin("http://localhost:4200"); // Allowed origin
	        config.addAllowedHeader("*"); // Allowed headers
	        config.addAllowedMethod("*"); // Allowed methods
	        source.registerCorsConfiguration("/**", config);
	        return new CorsFilter(source);
	    }

}
