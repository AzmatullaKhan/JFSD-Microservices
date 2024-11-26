package com.klu.services;

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
		
		O.setRazorpayOrderId(razorPayOrder.get("id"));
		O.setOrderStatus(razorPayOrder.get("status"));
		
		return OR.save(O);
	}
}
