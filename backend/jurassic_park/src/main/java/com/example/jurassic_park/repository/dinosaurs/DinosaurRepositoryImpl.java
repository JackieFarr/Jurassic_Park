package com.example.jurassic_park.repository.dinosaurs;

import com.example.jurassic_park.repository.paddocks.PaddockRepositoryCustom;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;

public class DinosaurRepositoryImpl implements PaddockRepositoryCustom {

    @Autowired
    EntityManager entityManager;
}
