package com.klu.controller;

import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.klu.model.Customer;
import com.klu.services.CustomerService;

@RestController
@RequestMapping("/customer")
@CrossOrigin
public class CustomerController {
	
	@Autowired
	CustomerService CS;
	
	@PostMapping("/saveCustomer")
	public String saveCustomer(@RequestBody Customer C) {
		Customer CNEW =CS.saveCustomer(C);
		return CNEW.toString();
	}
	
	@GetMapping("/checkUsername/{username}")
	public String getCustomerOnUsername(@PathVariable String username){
		List<Customer> customer_list = CS.getCustomers();
		for (Customer customer : customer_list) {
			String in_username = customer.getUsername();
			String out_username = username;
			
			if(in_username.toLowerCase().equals(out_username.toLowerCase()))
				return "stop";
		}
		return "proceed";
	}
	
	@GetMapping("/checkMobileNumber/{number}")
	public String getCustomerOnMobileNumber(@PathVariable String number){
		List<Customer> customer_list = CS.getCustomers();
		for (Customer customer : customer_list) {
			String in = customer.getMobile_number();
			String out = number;
			
			if(in.equals(out))
				return "stop";
		}
		return "proceed";
	}
	
	@GetMapping("/login/{username}")
	public String loginCustomer(@PathVariable String username) {
			List<Customer> customer_list = CS.getCustomers();
			for (Customer customer : customer_list) {
				String in_username = customer.getUsername();
				String out_username = username;
				
				if(in_username.toLowerCase().equals(out_username.toLowerCase()))
					return new Gson().toJson(customer);
			}
		return "Stop";
	}
	
	@GetMapping("/resetPassword/{number}")
	public String checkCustomerOnMobileNumber(@PathVariable String number){
		List<Customer> customer_list = CS.getCustomers();
		for (Customer customer : customer_list) {
			String in = customer.getMobile_number();
			String out = number;
			
			if(in.equals(out))
				return "proceed";
		}
		return "stop";
	}
	
	@PostMapping("/changePassword/{number}/{password}")
	public String changePassword(@PathVariable String number, @PathVariable String password) {
		List<Customer> customer_list = CS.getCustomers();
		for (Customer customer : customer_list) {
			String in = customer.getMobile_number();
			String out = number;
			
			if(in.equals(out)) {
				customer.setPassword(password);
				CS.saveCustomer(customer);
				return "Success";
			}
		}
		return "Failed";
	}
	
	
}
