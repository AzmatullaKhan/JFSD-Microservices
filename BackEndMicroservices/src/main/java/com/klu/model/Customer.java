package com.klu.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="customer_details")
public class Customer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	@Column(name = "username")
	String username;
	
	@Column(name = "password")
	String password;
	
	@Column(name = "date_of_birth")
	String date_of_birth;
	
	@Column(name = "mobile_number")
	String mobile_number;
	
	@Column(name="gender")
	String gender;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getDate_of_birth() {
		return date_of_birth;
	}

	public void setDate_of_birth(String date_of_birth) {
		this.date_of_birth = date_of_birth;
	}

	public String getMobile_number() {
		return mobile_number;
	}

	public void setMobile_number(String mobile_number) {
		this.mobile_number = mobile_number;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	@Override
	public String toString() {
		return "Customer [id=" + id + ", username=" + username + ", password=" + password + ", date_of_birth="
				+ date_of_birth + ", mobile_number=" + mobile_number + ", gender=" + gender + "]";
	}

	public Customer() {
		super();
	}

	public Customer(int id, String username, String password, String date_of_birth, String mobile_number,
			String gender) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.date_of_birth = date_of_birth;
		this.mobile_number = mobile_number;
		this.gender = gender;
	}
	
	
	
}
