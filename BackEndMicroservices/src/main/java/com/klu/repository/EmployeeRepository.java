package com.klu.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.klu.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer>{

}
