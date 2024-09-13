package com.klu.services;

import java.util.List;

import com.klu.model.Employee;

public interface EmployeeService {
	public Employee saveEmployee(Employee E);
	public List<Employee> getEmployees();
}
