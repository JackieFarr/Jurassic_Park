package com.example.jurassic_park.models;

import com.example.jurassic_park.enums.DinoType;
import com.example.jurassic_park.enums.PaddockType;
import com.example.jurassic_park.models.dinosaur.Dinosaur;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

public class Paddock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="capacity")
    private int capacity;

    @Column(name="dinosaurs")
    private PaddockType paddockType;


    @Column
    @OneToMany(mappedBy = "dinosaur", fetch=FetchType.LAZY)
    private List<Dinosaur> dinosaurs;

    public Paddock(String name, int capacity, PaddockType paddockType) {
        this.name = name;
        this.capacity = capacity;
        dinosaurs = new ArrayList<Dinosaur>();
        paddockType = paddockType;
    }

    public Paddock() {
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getCapacity() {
        return capacity;
    }

    public List<Dinosaur> getDinosaurs() {
        return dinosaurs;
    }

    public PaddockType getPaddockType() {
        return paddockType;
    }

    public void addDino(Dinosaur dinosaur){
        this.dinosaurs.add(dinosaur);
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public void setDinosaurs(List<Dinosaur> dinosaurs) {
        this.dinosaurs = dinosaurs;
    }

    public void setPaddockType(PaddockType paddockType) {
        this.paddockType = paddockType;
    }
}
