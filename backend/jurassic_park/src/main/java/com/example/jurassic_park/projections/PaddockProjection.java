package com.example.jurassic_park.projections;

import com.example.jurassic_park.enums.PaddockType;
import com.example.jurassic_park.models.Paddock;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name="embedDinosaurs", types = Paddock.class)
public interface PaddockProjection {
    long getId();
    String getName();
    int getCapacity();
    List<DinosaurProjection> getDinosaurs();
    PaddockType getPaddockType();
}
