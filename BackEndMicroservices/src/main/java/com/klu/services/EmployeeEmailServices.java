package com.klu.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klu.model.EmployeeEmail;
import com.klu.repository.EmployeeEmailRepository;

@Service
public class EmployeeEmailServices {
	
	@Autowired
	private EmployeeEmailRepository EER;
	
	public EmployeeEmail saveEmail(EmployeeEmail E) {
		return EER.save(E);
	}
}
