package com.example.jurassic_park.projections;

import com.example.jurassic_park.enums.DinoType;
import com.example.jurassic_park.enums.SpeciesType;
import com.example.jurassic_park.models.Paddock;
import com.example.jurassic_park.models.Dinosaur;
import org.springframework.data.rest.core.config.Projection;

@Projection(name="embedPaddocks", types = Dinosaur.class)
public interface DinosaurProjection {
    long getId();
    String getName();
    SpeciesType getSpeciesType();
    int getWeight();
    int getHeight();
    DinoType getDinoType();
    Paddock getPaddock();
//    String getDinoTypeString();
}
