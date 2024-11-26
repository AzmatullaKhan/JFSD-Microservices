package com.klu.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.klu.model.OrderModel;

public interface OrderRepo extends JpaRepository<OrderModel, Integer>{

}
