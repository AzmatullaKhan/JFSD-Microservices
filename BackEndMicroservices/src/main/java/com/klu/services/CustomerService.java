package com.klu.services;

import java.util.List;

import com.klu.model.Customer;

public interface CustomerService {
	public Customer saveCustomer(Customer C);
	public List<Customer> getCustomers();
}
