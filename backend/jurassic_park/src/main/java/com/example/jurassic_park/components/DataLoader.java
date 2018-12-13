package com.example.jurassic_park.components;

import com.example.jurassic_park.enums.DinoType;
import com.example.jurassic_park.enums.PaddockType;
import com.example.jurassic_park.models.Paddock;
import com.example.jurassic_park.models.dinosaur.*;
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

        TyrannosaurusRex trex1 = new TyrannosaurusRex(10000, 40, DinoType.CARNIVORE);
        dinosaurRepository.save(trex1);

        Diplodocus dipli1 = new Diplodocus(9000, 16, DinoType.HERBIVORE);
        dinosaurRepository.save(dipli1);

        Brachiosaurus brach1 = new Brachiosaurus(8000, 10, DinoType.HERBIVORE);
        dinosaurRepository.save(brach1);

        Pterodactyl pter1 = new Pterodactyl(2000, 4, DinoType.FLYING);
        dinosaurRepository.save(pter1);

        Sarcosuchus sar1 = new Sarcosuchus(1000, 2, DinoType.AQUATIC);
        dinosaurRepository.save(sar1);

        Paddock goldblumGreen = new Paddock("Goldblum Green", 5, PaddockType.LAND);
        paddockRepository.save(goldblumGreen);

        Paddock hammondHill = new Paddock("Hammond Hill", 10, PaddockType.LAND);
        paddockRepository.save(hammondHill);

        Paddock lake = new Paddock("Lake Laura", 20, PaddockType.LAKE);
        paddockRepository.save(lake);

        Paddock cage1 = new Paddock("Alan's Aviary", 12, PaddockType.BIRDCAGE);
        paddockRepository.save(cage1);

    }
}
