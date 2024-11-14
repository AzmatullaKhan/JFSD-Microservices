package com.klu.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.klu.model.CustomerCart;

public interface CustomerCartRepository extends JpaRepository<CustomerCart, Long>{

}
