package com.klu.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klu.model.Customer;
import com.klu.repository.CustomerRepository;

@Service
public class CustomerServiceImplementor implements CustomerService{
	
	@Autowired
	CustomerRepository CR;

	@Override
	public Customer saveCustomer(Customer C) {
		return CR.save(C);
	}

	@Override
	public List<Customer> getCustomers() {
		return CR.findAll();
	}
	
}
