package com.klu.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klu.model.Employee;
import com.klu.repository.EmployeeRepository;

@Service
public class EmployeeServiceImplementor implements EmployeeService{
	
	@Autowired
	EmployeeRepository ER;

	@Override
	public Employee saveEmployee(Employee E) {
		// TODO Auto-generated method stub
		return ER.save(E);
	}

	@Override
	public List<Employee> getEmployees() {
		// TODO Auto-generated method stub
		return ER.findAll();
	}

}
