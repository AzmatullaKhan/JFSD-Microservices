package com.klu.services;


import java.util.List;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.klu.model.OrderModel;
import com.klu.repository.OrderRepo;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;

@Service
public class OrderService {
	
	@Autowired
	private OrderRepo OR;
	
	@Value("${razorpay.key.id}")
	private String razorPayKey;
	
	@Value("${razorpay.key.secret}")
	private String razorPaySecret;
	
	private RazorpayClient client;
	
	public OrderModel createOrder(OrderModel O) throws Exception{
		
		JSONObject orderReq = new JSONObject();
		
		orderReq.put("amount", O.getAmount()*100);
		orderReq.put("currency", "INR");
		orderReq.put("receipt", O.getName());
		
		this.client = new RazorpayClient(razorPayKey, razorPaySecret);
		
		Order razorPayOrder = client.orders.create(orderReq);
		
//		System.out.println(razorPayOrder);
		
		O.setRazorpayOrderId(razorPayOrder.get("id"));
//		O.setOrderStatus(razorPayOrder.get("status"));
		
//		System.out.println(O);
		
		return OR.save(O);
	}
	
	public OrderModel updateOrder(String responsePayLoad) {
//		String razorpayOrderId = responsePayLoad.get("razorpay_order_id");

	    System.out.println("Received Payload: " + responsePayLoad);
//	    System.out.println("Extracted razorpayOrderId: " + razorpayOrderId);

	    OrderModel order = OR.findByRazorpayOrderId(responsePayLoad);

	    if (order == null) {
//	        System.err.println("No order found for razorpayOrderId: " + razorpayOrderId);
	        throw new RuntimeException("Order not found");
	    }

	    order.setOrderStatus("success");

	    System.out.println("Updated Order: " + order);

	    return OR.save(order);
	}
	
	public List<OrderModel> getAll(){
		return OR.findAll();
	}
}
