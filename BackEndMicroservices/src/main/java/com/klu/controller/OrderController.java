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

import com.klu.model.OrderModel;
import com.klu.services.OrderService;

@RestController
@RequestMapping("/order")
@CrossOrigin(origins = "http://localhost:3000") 
public class OrderController {

	@Autowired
	private OrderService OS;
	
	@PostMapping("/createOrder")
	public ResponseEntity<OrderModel> createOrder(@RequestBody OrderModel OM) throws Exception{
		return new ResponseEntity<>(OS.createOrder(OM), HttpStatus.CREATED);
	}
	
	@PostMapping("/handlePayCallBack/{orderId}")
	public String handlePaymentCallBack(@PathVariable String orderId) {
		try {
			OrderModel OM = OS.updateOrder(orderId);
			return OM.toString();
		} catch (Exception e) {
			return e.getMessage();
		}
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<OrderModel>> getAlll(){
		List<OrderModel> l = OS.getAll();
		
		return new ResponseEntity<>(l, HttpStatus.OK);
	}
}
