package com.PersonalDetails.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;

@Configuration
public class MongoConfig extends AbstractMongoClientConfiguration{
	
	@Override
	protected String getDatabaseName() {
		// TODO Auto-generated method stub
		return "MyApplication";
	}

	@Override
	public MongoClient mongoClient() {
		return MongoClients.create("mongodb://localhost:27017");
	}

}
