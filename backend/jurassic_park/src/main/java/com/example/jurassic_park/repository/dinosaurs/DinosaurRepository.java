package com.example.jurassic_park.repository.dinosaurs;

import com.example.jurassic_park.models.Dinosaur;
import com.example.jurassic_park.projections.DinosaurProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(excerptProjection = DinosaurProjection.class)
public interface DinosaurRepository extends JpaRepository<Dinosaur, Long>, DinosaurRepositoryCustom {

    List<Dinosaur> getAllDinosForPaddock(String paddock);

}
