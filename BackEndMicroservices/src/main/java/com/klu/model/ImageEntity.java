package com.klu.model;

import jakarta.persistence.*;

@Entity
@Table(name = "images")
public class ImageEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] data1;
    
    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] data2;
    
    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] data3;
    
    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] data4;
    
    
    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] data5;

    @Column(name = "name")
    String name;
    
    @Column(name="type")
    String type;

    @Column(name = "cost")
    String cost;
    
    @Column(name ="materialused")
    String materialused;
    
    @Column(name ="description")
    String description;
    
    @Column(name ="publisher")
    String publisher;
    
    
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

	public byte[] getData1() {
		return data1;
	}

	public void setData1(byte[] data1) {
		this.data1 = data1;
	}

	public byte[] getData2() {
		return data2;
	}

	public void setData2(byte[] data2) {
		this.data2 = data2;
	}

	public byte[] getData3() {
		return data3;
	}

	public void setData3(byte[] data3) {
		this.data3 = data3;
	}

	public byte[] getData4() {
		return data4;
	}

	public void setData4(byte[] data4) {
		this.data4 = data4;
	}

	public byte[] getData5() {
		return data5;
	}

	public void setData5(byte[] data5) {
		this.data5 = data5;
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

	public ImageEntity() {}


    // Getters and setters omitted for brevity
}
