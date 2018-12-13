package com.example.jurassic_park.repository.paddocks;

import com.example.jurassic_park.models.Paddock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaddockRepository extends JpaRepository<Paddock, Long>, PaddockRepositoryCustom {
}
