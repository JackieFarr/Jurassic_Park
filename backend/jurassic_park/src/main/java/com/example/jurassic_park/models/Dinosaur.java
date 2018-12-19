package com.example.jurassic_park.models;

import com.example.jurassic_park.enums.DinoType;
import com.example.jurassic_park.enums.SpeciesType;
import com.example.jurassic_park.models.Paddock;

import javax.persistence.*;

@Entity
@Table(name = "dinosaurs")
public class Dinosaur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "speciesType")
    private SpeciesType speciesType;

    @Column(name = "weight")
    private int weight;

    @Column(name="height")
    private int height;

    @Column(name="dinoType")
    private DinoType dinoType;

    @ManyToOne
    @JoinColumn(name="paddock_id", nullable = false)
    private Paddock paddock;

    public Dinosaur(String name, SpeciesType speciesType, int weight, int height, DinoType dinoType, Paddock paddock) {
        this.name = name;
        this.speciesType = speciesType;
        this.weight = weight;
        this.height = height;
        this.dinoType = dinoType;
        this.paddock = paddock;
    }

    public Dinosaur() {
    }

    public SpeciesType getSpeciesType() {
        return speciesType;
    }

    public void setSpeciesType(SpeciesType speciesType) {
        this.speciesType = speciesType;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
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

    public String getPaddockName(Paddock paddock){
        return paddock.name;
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
