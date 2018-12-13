package com.example.jurassic_park.models.dinosaur;

import com.example.jurassic_park.enums.DinoType;

public abstract class Dinosaur {

    private Long id;
    private String species;
    private int weight;
    private int height;
    private DinoType dinoType;

    public Dinosaur(String species, int weight, int height, DinoType dinoType) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.dinoType = dinoType;
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
