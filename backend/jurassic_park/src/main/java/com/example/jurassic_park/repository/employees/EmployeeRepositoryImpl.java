package com.example.jurassic_park.repository.employees;

import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;

public class EmployeeRepositoryImpl implements EmployeeRepositoryCustom {

    @Autowired
    EntityManager entityManager;
}
