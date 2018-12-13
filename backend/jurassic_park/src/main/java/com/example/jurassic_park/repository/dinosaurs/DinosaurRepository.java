package com.example.jurassic_park.repository.dinosaurs;

import com.example.jurassic_park.models.dinosaur.Dinosaur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DinosaurRepository extends JpaRepository<Dinosaur, Long>, DinosaurRepositoryCustom {
}
