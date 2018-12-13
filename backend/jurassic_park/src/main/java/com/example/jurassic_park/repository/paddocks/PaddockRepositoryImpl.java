package com.example.jurassic_park.repository.paddocks;

import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;

public class PaddockRepositoryImpl implements PaddockRepositoryCustom{

    @Autowired
    EntityManager entityManager;
}
