package com.example.jurassic_park.repository.visitors;

import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;

public class VisitorRepositoryImpl implements VisitorRepositoryCustom {

    @Autowired
    EntityManager entityManager;
}
