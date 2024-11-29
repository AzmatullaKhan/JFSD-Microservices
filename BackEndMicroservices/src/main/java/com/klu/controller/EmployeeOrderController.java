package com.klu.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.klu.model.EmployeeOrderModel;
import com.klu.services.EmployeeOrderService;

@RestController
@CrossOrigin(origins = "http://localhost:3000") 
@RequestMapping("/employeeOrder")
public class EmployeeOrderController {

	@Autowired
	EmployeeOrderService EOS;
	
	@PostMapping("/createOrder")
	public String createOrder(@RequestBody EmployeeOrderModel EOM) {
		return EOS.saveOrder(EOM).toString();
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<EmployeeOrderModel>> getAlll(){
		List<EmployeeOrderModel> l = EOS.getAll();
		
		if(l.isEmpty())
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		
		return new ResponseEntity<List<EmployeeOrderModel>>(l, HttpStatus.OK);
	}
	
	@PostMapping("/updateStatus/{id}/{status}")
	public String updateStatus(@PathVariable int id, @PathVariable String status) {
		List<EmployeeOrderModel> l = EOS.getAll();
		for(EmployeeOrderModel EM : l) {
			if(EM.getId() == id) {
				EM.setDeliveredstatus(status);
				EOS.saveOrder(EM);
				return "Success";
			}
		}
		return "Failed";
	}
}
