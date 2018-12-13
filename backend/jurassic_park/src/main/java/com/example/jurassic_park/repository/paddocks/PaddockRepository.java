package com.example.jurassic_park.repository.paddocks;

import com.example.jurassic_park.models.Paddock;
import com.example.jurassic_park.projections.PaddockProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(excerptProjection = PaddockProjection.class)
public interface PaddockRepository extends JpaRepository<Paddock, Long>, PaddockRepositoryCustom {
}
