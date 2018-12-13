package com.example.jurassic_park.repository.visitors;

import com.example.jurassic_park.models.Visitor;
import com.example.jurassic_park.projections.VisitorProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = VisitorProjection.class)
public interface VisitorRepository extends JpaRepository<Visitor, Long>, VisitorRepositoryCustom {
}
