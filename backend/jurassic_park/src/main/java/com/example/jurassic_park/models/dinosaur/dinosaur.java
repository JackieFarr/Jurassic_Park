package com.example.jurassic_park.models.dinosaur;

import com.example.jurassic_park.enums.DinoType;
import com.example.jurassic_park.models.Paddock;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table
public abstract class Dinosaur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "species")
    private String species;

    @Column(name = "weight")
    private int weight;

    @Column(name="height")
    private int height;

    @Column(name="Type")
    private DinoType dinoType;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="paddock_id", nullable = false)
    private Paddock paddock;

    public Dinosaur(String species, int weight, int height, DinoType dinoType) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.dinoType = dinoType;
        this.paddock = paddock;
    }

    public Dinosaur() {
    }

    public Long getId() {
        return id;
    }

    public String getSpecies() {
        return species;
    }

    public int getWeight() {
        return weight;
    }

    public int getHeight() {
        return height;
    }

    public DinoType getDinoType() {
        return dinoType;
    }

    public Paddock getPaddock() {
        return paddock;
    }

    public void setSpecies(String species) {
        this.species = species;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public void setDinoType(DinoType dinoType) {
        this.dinoType = dinoType;
    }
}
