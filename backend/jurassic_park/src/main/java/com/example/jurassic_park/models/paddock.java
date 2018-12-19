package com.example.jurassic_park.models;

import com.example.jurassic_park.enums.PaddockType;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "paddocks")
public class Paddock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    protected String name;

    @Column(name="capacity")
    private int capacity;

    @Column(name="paddock_type")
    private PaddockType paddockType;

    @JsonIgnoreProperties("paddocks")
    @Column
    @OneToMany(mappedBy = "paddock", fetch=FetchType.LAZY)
    private List<Dinosaur> dinosaurs;

    public Paddock(String name, int capacity, PaddockType paddockType) {
        this.name = name;
        this.capacity = capacity;
        this.paddockType = paddockType;
        this.dinosaurs = new ArrayList<>();
    }

    public Paddock() {
    }

    public void setId(Long id) {
        this.id = id;
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
