package com.example.jurassic_park.controller;

import com.example.jurassic_park.repository.employees.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/employees")
public class EmployeeController {

    @Autowired
    EmployeeRepository employeeRepository;
}
