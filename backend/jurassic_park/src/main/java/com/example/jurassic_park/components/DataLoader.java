package com.example.jurassic_park.components;

import com.example.jurassic_park.enums.DinoType;
import com.example.jurassic_park.enums.PaddockType;
import com.example.jurassic_park.models.Dinosaur;
import com.example.jurassic_park.models.Paddock;
import com.example.jurassic_park.repository.dinosaurs.DinosaurRepository;
import com.example.jurassic_park.repository.paddocks.PaddockRepository;
import com.example.jurassic_park.repository.visitors.VisitorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    DinosaurRepository dinosaurRepository;

    @Autowired
    PaddockRepository paddockRepository;

    @Autowired
    VisitorRepository visitorRepository;

    public DataLoader() {
    }

    public void run(ApplicationArguments args) {

        DateFormat sfd = new SimpleDateFormat("dd-MM-yy");
        String newDate = "24-07-2018";
        Date date = null;
        try {
            date = sfd.parse(newDate);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        Paddock goldblumGreen = new Paddock("Goldblum Green", 5, PaddockType.LAND);
        paddockRepository.save(goldblumGreen);

        Paddock hammondHill = new Paddock("Hammond Hill", 10, PaddockType.LAND);
        paddockRepository.save(hammondHill);

        Paddock lake = new Paddock("Lake Laura", 20, PaddockType.LAKE);
        paddockRepository.save(lake);

        Paddock cage1 = new Paddock("Alan's Aviary", 12, PaddockType.BIRDCAGE);
        paddockRepository.save(cage1);

        Dinosaur Tommy = new Dinosaur( "Tyrannesaurus Rex", 10000, 40, DinoType.CARNIVORE, goldblumGreen);
        dinosaurRepository.save(Tommy);

        Dinosaur Dippy = new Dinosaur("Diplodocus", 9000, 16, DinoType.HERBIVORE, hammondHill);
        dinosaurRepository.save(Dippy);

        Dinosaur Zack = new Dinosaur("Brachiosaurus", 8000, 10, DinoType.HERBIVORE, hammondHill);
        dinosaurRepository.save(Zack);

        Dinosaur Peter = new Dinosaur("Pterodactyl", 2000, 4, DinoType.FLYING, cage1);
        dinosaurRepository.save(Peter);

        Dinosaur Sara = new Dinosaur("Sarcosuchus", 1000, 2, DinoType.AQUATIC, lake);
        dinosaurRepository.save(Sara);



    }
}
