package com.klu.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klu.model.EmployeeOrderModel;
import com.klu.repository.EmployeeOrderRepo;

@Service
public class EmployeeOrderService {

	@Autowired
	EmployeeOrderRepo EOR;
	
	public EmployeeOrderModel saveOrder(EmployeeOrderModel EM) {
		return EOR.save(EM);
	}
	
	public List<EmployeeOrderModel> getAll(){
		return EOR.findAll();
	}
}
