package com.klu.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="customer_orderdetails")
public class OrderModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int orderId;
	
	String name;
	String mobileNumber;
	String pincode;
	String locality;
	String address;
	String city;
	String district;
	String landmark;
	String alternateNumber;
	Integer amount;
	String razorpayOrderId;
	String orderStatus;
	
	@Override
	public String toString() {
		return "OrderModel [orderId=" + orderId + ", name=" + name + ", mobileNumber=" + mobileNumber + ", pincode="
				+ pincode + ", locality=" + locality + ", address=" + address + ", city=" + city + ", district="
				+ district + ", landmark=" + landmark + ", alternateNumber=" + alternateNumber + ", amount=" + amount
				+ ", razorpayOrderId=" + razorpayOrderId + ", orderStatus=" + orderStatus + "]";
	}
	public int getOrderId() {
		return orderId;
	}
	public void setOrderId(Integer orderId) {
		this.orderId = orderId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	public String getLocality() {
		return locality;
	}
	public void setLocality(String locality) {
		this.locality = locality;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getDistrict() {
		return district;
	}
	public void setDistrict(String district) {
		this.district = district;
	}
	public String getLandmark() {
		return landmark;
	}
	public void setLandmark(String landmark) {
		this.landmark = landmark;
	}
	public String getAlternateNumber() {
		return alternateNumber;
	}
	public void setAlternateNumber(String alternateNumber) {
		this.alternateNumber = alternateNumber;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(Integer amount) {
		this.amount = amount;
	}
	public String getRazorpayOrderId() {
		return razorpayOrderId;
	}
	public void setRazorpayOrderId(String razorpayOrderId) {
		this.razorpayOrderId = razorpayOrderId;
	}
	public String getOrderStatus() {
		return orderStatus;
	}
	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}
	
	
}
