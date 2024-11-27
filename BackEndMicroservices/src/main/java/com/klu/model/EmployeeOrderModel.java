package com.klu.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name = "employee_orders")
public class EmployeeOrderModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
		
	String dressname;
	String dresscost;
	
	@Lob
    @Column(columnDefinition = "LONGBLOB")
	String data1;
	
	String dresspublisher;            
	String buyername;
	String buyernumber;
	String buyersize;
	String deliveredstatus;
//	String orderedId;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDressname() {
		return dressname;
	}
//	public String getOrderedId() {
//		return orderedId;
//	}
//	public void setOrderedId(String orderedId) {
//		this.orderedId = orderedId;
//	}
	public void setDressname(String dressname) {
		this.dressname = dressname;
	}
	public String getDresscost() {
		return dresscost;
	}
	public void setDresscost(String dresscost) {
		this.dresscost = dresscost;
	}
	public String getData1() {
		return data1;
	}
	public void setData1(String data1) {
		this.data1 = data1;
	}
	public String getDresspublisher() {
		return dresspublisher;
	}
	public void setDresspublisher(String dresspublisher) {
		this.dresspublisher = dresspublisher;
	}
	public String getBuyername() {
		return buyername;
	}
	public void setBuyername(String buyername) {
		this.buyername = buyername;
	}
	public String getBuyernumber() {
		return buyernumber;
	}
	public void setBuyernumber(String buyernumber) {
		this.buyernumber = buyernumber;
	}
	public String getBuyersize() {
		return buyersize;
	}
	public void setBuyersize(String buyersize) {
		this.buyersize = buyersize;
	}
	public String getDeliveredstatus() {
		return deliveredstatus;
	}
	public void setDeliveredstatus(String deliveredstatus) {
		this.deliveredstatus = deliveredstatus;
	}
	@Override
	public String toString() {
		return "EmployeeOrderModel [id=" + id + ", dressname=" + dressname + ", dresscost=" + dresscost + ", data1="
				+ data1 + ", dresspublisher=" + dresspublisher + ", buyername=" + buyername + ", buyernumber="
				+ buyernumber + ", buyersize=" + buyersize + ", deliveredstatus=" + deliveredstatus  + "]";
	}
	
	
}
