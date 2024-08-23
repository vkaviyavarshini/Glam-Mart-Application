package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="BookAppointment")
public class Appointment {
	@Id
	
	@GeneratedValue(strategy= GenerationType.AUTO)
	private long appoint_id;

	private String email;

	private String name;

	private String phone;

	private String category;

	private String date;

	private String time;
	
	private String note;
	
	public Appointment(long appoint_id, String email, String name, String phone, String category, String date,
			String time, String note) {
		super();
		this.appoint_id = appoint_id;
		this.email = email;
		this.name = name;
		this.phone = phone;
		this.category = category;
		this.date = date;
		this.time = time;
		this.note = note;
	}

	public Appointment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public long getAppoint_id() {
		return appoint_id;
	}

	public void setAppoint_id(long appoint_id) {
		this.appoint_id = appoint_id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}
	
	
	

}
