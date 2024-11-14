package com.klu.controller;

import java.util.List;

public class CustomerCartDetailResponse {
	 private Long id;
    private List<String> images;
    private String name;
    private String cost;
    private String materialUsed;
    private String description;
    private String publisher;
    private String customerId;
    
	public String getCustomerId() {
		return customerId;
	}
	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public List<String> getImages() {
		return images;
	}
	public void setImages(List<String> images) {
		this.images = images;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCost() {
		return cost;
	}
	public void setCost(String cost) {
		this.cost = cost;
	}
	public String getMaterialUsed() {
		return materialUsed;
	}
	public void setMaterialUsed(String materialUsed) {
		this.materialUsed = materialUsed;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getPublisher() {
		return publisher;
	}
	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}
	@Override
	public String toString() {
		return "CustomerCartDetailResponse [id=" + id + ", images=" + images + ", name=" + name +  ", cost=" + cost + ", materialUsed=" + materialUsed + ", description=" + description + ", publisher="
				+ publisher + "]";
	}
	public CustomerCartDetailResponse(Long id, List<String> images, String name, String cost,
			String materialUsed, String description, String publisher, String customerId) {
		super();
		this.id = id;
		this.images = images;
		this.name = name;
		this.cost = cost;
		this.materialUsed = materialUsed;
		this.description = description;
		this.publisher = publisher;
		this.customerId=customerId;
	}
    
}
