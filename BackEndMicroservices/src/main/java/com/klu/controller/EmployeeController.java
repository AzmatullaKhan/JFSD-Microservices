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
import com.klu.model.Employee;
import com.klu.model.EmployeeEmail;
import com.klu.services.EmployeeEmailServices;
import com.klu.services.EmployeeService;

@RestController
@RequestMapping("/employee")
@CrossOrigin
public class EmployeeController {
	
	@Autowired
	EmployeeService CS;
	
	@Autowired
	EmployeeEmailServices EES;
	
	@PostMapping("/saveEmployee")
	public String saveEmployee(@RequestBody Employee C) {
		Employee ENEW =CS.saveEmployee(C);
		return ENEW.toString();
	}
	
	@GetMapping("/checkUsername/{username}")
	public String getEmployeeOnUsername(@PathVariable String username){
		List<Employee> Employee_list = CS.getEmployees();
		for (Employee Employee : Employee_list) {
			String in_username = Employee.getUsername();
			String out_username = username;
			
			if(in_username.toLowerCase().equals(out_username.toLowerCase()))
				return "stop";
		}
		return "proceed";
	}
	
	@GetMapping("/checkMobileNumber/{number}")
	public String getEmployeeOnMobileNumber(@PathVariable String number){
		List<Employee> Employee_list = CS.getEmployees();
		for (Employee Employee : Employee_list) {
			String in = Employee.getMobile_number();
			String out = number;
			
			if(in.equals(out))
				return "stop";
		}
		return "proceed";
	}
	
	@GetMapping("/login/{username}")
	public String loginEmployee(@PathVariable String username) {
			List<Employee> Employee_list = CS.getEmployees();
			for (Employee Employee : Employee_list) {
				String in_username = Employee.getUsername();
				String out_username = username;
				
				if(in_username.toLowerCase().equals(out_username.toLowerCase()))
					return new Gson().toJson(Employee);
			}
		return "Stop";
	}
	
	@GetMapping("/resetPassword/{number}")
	public String checkEmployeeOnMobileNumber(@PathVariable String number){
		List<Employee> Employee_list = CS.getEmployees();
		for (Employee Employee : Employee_list) {
			String in = Employee.getMobile_number();
			String out = number;
			
			if(in.equals(out))
				return "proceed";
		}
		return "stop";
	}
	
	@PostMapping("/changePassword/{number}/{password}")
	public String changePassword(@PathVariable String number, @PathVariable String password) {
		List<Employee> Employee_list = CS.getEmployees();
		for (Employee Employee : Employee_list) {
			String in = Employee.getMobile_number();
			String out = number;
			
			if(in.equals(out)) {
				Employee.setPassword(password);
				CS.saveEmployee(Employee);
				return "Success";
			}
		}
		return "Failed";
	}
	
	@PostMapping("/employeeEmail")
	public String saveEmployeeEmail(@RequestBody EmployeeEmail E) {
		EES.saveEmail(E);
		return E.toString();
	}
}
