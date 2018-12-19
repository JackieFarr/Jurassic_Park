package com.example.jurassic_park.controller;

import com.example.jurassic_park.models.Dinosaur;
import com.example.jurassic_park.repository.dinosaurs.DinosaurRepository;
import com.example.jurassic_park.repository.paddocks.PaddockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/dinosaurs")
public class DinoController {

    @Autowired
    DinosaurRepository dinosaurRepository;

    @Autowired
    PaddockRepository paddockRepository;

    @GetMapping(value = "/paddocks/{paddock}")
    public List<Dinosaur> getAllDinosForPaddock(@PathVariable String paddock){
        return dinosaurRepository.getAllDinosForPaddock(paddock);
    }
}



























