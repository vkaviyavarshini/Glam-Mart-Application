package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Appointment;
import com.example.demo.service.AppointmentService;

@RestController


public class AppointmentController {
@Autowired
private AppointmentService Enrollserve;
@GetMapping("/roll")	
public List<Appointment> getAllEnroll() {

return Enrollserve.getAll();
}
@GetMapping("/roll/{id}")
public Appointment getHealthById(@PathVariable Long id) {
return Enrollserve.getHealthById(id);
}
@PostMapping("/addroll")
public boolean createHealth(@RequestBody Appointment Enroll) {
return Enrollserve.createHealth(Enroll);
}
@PutMapping("/updateroll/{id}")
public Appointment updateEnroll( @RequestBody Appointment Enroll,@PathVariable Long id) {
return Enrollserve.updateEnroll(id, Enroll);
}
@DeleteMapping("/deleteroll/{id}")
public String deleteEnroll(@PathVariable Long id) {
	Enrollserve.deleteEnroll(id);
	return "Details Deleted";
 
}
}