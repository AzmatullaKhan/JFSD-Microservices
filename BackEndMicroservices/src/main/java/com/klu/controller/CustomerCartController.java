package com.klu.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.klu.model.CustomerCart;
import com.klu.services.CustomerCartService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/customercart")
@CrossOrigin(origins = "http://localhost:3000") 
public class CustomerCartController {
	
	@Autowired
	private CustomerCartService ccs;
	
	@PostMapping("/upload")
	public ResponseEntity<?> uploadImage(
			@RequestParam("data1") String data1,
			@RequestParam("name") String name,
            @RequestParam("cost") String cost,
            @RequestParam("materialused") String materialused,
            @RequestParam("description") String description,
            @RequestParam("publisher") String publisher,
            @RequestParam("customerid") String customerId
            ){
		try {
			CustomerCart cc = ccs.saveDress(data1, name, cost, materialused, description, publisher, customerId);
			return new ResponseEntity<>(cc, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>("Error whilse save images:"+e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<List<String>> getOneImage(@PathVariable Long id){
		CustomerCart cc = ccs.getDressOne(id);
		if(cc!=null) {
			List<String> imageBase64List = new ArrayList<>();
			imageBase64List.add(cc.getData1());
			
            return new ResponseEntity<>(imageBase64List, HttpStatus.OK);
		}
		else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<CustomerCartDetailResponse>> getAll(){
		List<CustomerCart> imageEntities = ccs.getAllCart();
		
		if(imageEntities.isEmpty())
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		
		List<CustomerCartDetailResponse> allCartDetails = new ArrayList<>();
		
		for(CustomerCart customerCart : imageEntities) {
			List<String> imageBase64List = new ArrayList<>();
			imageBase64List.add(customerCart.getData1());
			CustomerCartDetailResponse cartDetails = new CustomerCartDetailResponse(
					customerCart.getId(),
                    imageBase64List,
                    customerCart.getName(),
                    customerCart.getCost(),
                    customerCart.getMaterialused(),
                    customerCart.getDescription(),
                    customerCart.getPublisher(),
                    customerCart.getCustomerId()
					);
			
			allCartDetails.add(cartDetails);
		}
		return new ResponseEntity<>(allCartDetails, HttpStatus.OK);
	}
	
	@DeleteMapping("/deleteCart/{id}")
	public String deleteCart(@PathVariable Long id) {
		return ccs.deleteDress(id);
	}
	
}
