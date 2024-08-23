package com.example.demo.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Appointment;
import com.example.demo.repository.AppointmentRepo;


@Service
public class AppointmentService {
@Autowired
private  AppointmentRepo Enrollrepo;

public List<Appointment> getAll() {
return Enrollrepo.findAll();

}
public Appointment getHealthById(Long id) {
return Enrollrepo.findById(id).get();
}
public boolean createHealth(Appointment Enroll) {
return Enrollrepo.save(Enroll) != null? true:false;
}
public Appointment updateEnroll(Long id, Appointment Enroll) {

return Enrollrepo.saveAndFlush(Enroll);
}
public void deleteEnroll(Long id) {

	Enrollrepo.deleteById(id);
}

}