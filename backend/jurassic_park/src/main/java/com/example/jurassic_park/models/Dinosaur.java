package com.example.jurassic_park.models;

import com.example.jurassic_park.enums.DinoType;
import com.example.jurassic_park.models.Paddock;

import javax.persistence.*;

@Entity
@Table(name = "dinosaurs")
public class Dinosaur {

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

    @ManyToOne
    @JoinColumn(name="paddock_id", nullable = false)
    private Paddock paddock;

    public Dinosaur(String species, int weight, int height, DinoType dinoType, Paddock paddock) {
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

    public void setId(Long id) {
        this.id = id;
    }

    public void setPaddock(Paddock paddock) {
        this.paddock = paddock;
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
