package com.klu.services;

import java.io.IOException;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klu.model.CustomerCart;
import com.klu.repository.CustomerCartRepository;

@Service
public class CustomerCartService {

	@Autowired
	private CustomerCartRepository CCR;
	
	public CustomerCart saveDress(String data1, String name, String cost, String materialused, String description, String publisher, String customerId) throws IOException {
		
		CustomerCart cc = new CustomerCart();
		cc.setCost(cost);
		cc.setName(name);
		cc.setMaterialused(materialused);
		cc.setDescription(description);
		cc.setPublisher(publisher);
		cc.setCustomerId(customerId);
		
		cc.setData1(data1);
		
		return CCR.save(cc);
	}
	
	public CustomerCart getDressOne(Long id) {
		return CCR.findById(id).orElse(null);
	}
	
	public List<CustomerCart> getAllCart(){
		return CCR.findAll();
	}
	
	public String deleteDress(Long id) {
		 CCR.deleteById(id);
		 return "Deleted";
	}
}
