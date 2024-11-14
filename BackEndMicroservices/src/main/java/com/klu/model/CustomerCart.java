package com.klu.model;

import jakarta.persistence.*;

@Entity
@Table(name = "customer_cart")
public class CustomerCart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private String data1;

    @Column(name = "name")
    String name;
    
    public String getCustomerId() {
		return customerId;
	}

	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}

    @Column(name = "cost")
    String cost;
    
    @Column(name ="materialused")
    String materialused;
    
    @Column(name ="description")
    String description;
    
    @Column(name ="publisher")
    String publisher;
    
    @Column(name = "customerId")
    String customerId;
    
    public String getPublisher() {
		return publisher;
	}

	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}

	public String getCost() {
		return cost;
	}

	public void setCost(String cost) {
		this.cost = cost;
	}

	public String getMaterialused() {
		return materialused;
	}

	public void setMaterialused(String materialused) {
		this.materialused = materialused;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getData1() {
		return data1;
	}

	public void setData1(String data1) {
		this.data1 = data1;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public CustomerCart() {}


    // Getters and setters omitted for brevity
}
