package com.klu.controller;

import java.util.List;

public class ImageDetailsResponse {
    private Long id;
    private List<String> images;
    private String name;
    private String type;
    private String cost;
    private String materialUsed;
    private String description;
    private String publisher;

    // Constructor
    public ImageDetailsResponse(Long id, List<String> images, String name, String type, String cost,
                                String materialUsed, String description, String publisher) {
        this.id = id;
        this.images = images;
        this.name = name;
        this.type = type;
        this.cost = cost;
        this.materialUsed = materialUsed;
        this.description = description;
        this.publisher = publisher;
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

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
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

    // Getters and Setters
    // ... (add getters and setters for each field)
}
