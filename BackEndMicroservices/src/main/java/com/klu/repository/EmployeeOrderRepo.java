package com.klu.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.klu.model.EmployeeOrderModel;

public interface EmployeeOrderRepo extends JpaRepository<EmployeeOrderModel, Integer> {

}
