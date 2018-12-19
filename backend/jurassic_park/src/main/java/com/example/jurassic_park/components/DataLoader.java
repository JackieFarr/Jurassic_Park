package com.example.jurassic_park.components;

import com.example.jurassic_park.enums.DinoType;
import com.example.jurassic_park.enums.PaddockType;
import com.example.jurassic_park.enums.SpeciesType;
import com.example.jurassic_park.models.Dinosaur;
import com.example.jurassic_park.models.Paddock;
import com.example.jurassic_park.models.Employee;
import com.example.jurassic_park.repository.dinosaurs.DinosaurRepository;
import com.example.jurassic_park.repository.paddocks.PaddockRepository;
import com.example.jurassic_park.repository.employees.EmployeeRepository;
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

    @Autowired
    EmployeeRepository employeeRepository;

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

        Dinosaur Screech = new Dinosaur("Screech" , SpeciesType.TYRANNOSAURUS_REX, 10000, 40, DinoType.CARNIVORE, goldblumGreen);
        dinosaurRepository.save(Screech);

        Dinosaur Kelly = new Dinosaur("Kelly", SpeciesType.DIPLODOCUS, 9000, 16, DinoType.HERBIVORE, hammondHill);
        dinosaurRepository.save(Kelly);

        Dinosaur Zack = new Dinosaur("Zack", SpeciesType.BRACHIOSAURUS, 8000, 10, DinoType.HERBIVORE, hammondHill);
        dinosaurRepository.save(Zack);

        Dinosaur Jessie = new Dinosaur("Jessie", SpeciesType.PTERODACTYL, 2000, 4, DinoType.FLYING, cage1);
        dinosaurRepository.save(Jessie);

        Dinosaur Slater = new Dinosaur("Slater",SpeciesType.VELOCIRAPTOR, 500, 2, DinoType.AQUATIC, lake);
        dinosaurRepository.save(Slater);

        Dinosaur Lisa = new Dinosaur("Lisa",SpeciesType.SARCOSUCHUS, 1000, 1, DinoType.AQUATIC, lake);
        dinosaurRepository.save(Lisa);

        Dinosaur Richard = new Dinosaur("Richard",SpeciesType.GALLIMIMUS, 2000, 4, DinoType.AQUATIC, lake);
        dinosaurRepository.save(Richard);

        Dinosaur Max = new Dinosaur("Max",SpeciesType.STEGOSAURUS, 1000, 2, DinoType.AQUATIC, lake);
        dinosaurRepository.save(Max);

        Dinosaur Tori = new Dinosaur("Tori",SpeciesType.PTERANODON, 1000, 2, DinoType.AQUATIC, lake);
        dinosaurRepository.save(Tori);

        Dinosaur Alex = new Dinosaur("Alex",SpeciesType.MOSASAURUS, 1000, 2, DinoType.AQUATIC, lake);
        dinosaurRepository.save(Alex);

        Dinosaur Leslie = new Dinosaur("Leslie",SpeciesType.TRICERATOPS, 1000, 2, DinoType.AQUATIC, lake);
        dinosaurRepository.save(Leslie);

        Employee Alan = new Employee("Dr. Alan Grant", "Paleontologist", "http://jurassicparkbtf.weebly.com/uploads/2/7/8/4/27841479/3442694_orig.png");
        employeeRepository.save(Alan);

        Employee John = new Employee("John Hammond", "Jurassic Park CEO", "http://www.jurassic-pedia.com/wp-content/uploads/2011/03/hammond_1.png");
        employeeRepository.save(John);

        Employee Laura = new Employee("Ellie Sattler", "Paleobotanist", "https://vignette.wikia.nocookie.net/parody/images/4/42/Jurassic_Park_Ellie_Sattler.jpg");
        employeeRepository.save(Laura);

        Employee Malcolm = new Employee("Dr. Ian Malcolm", "Mathematician", "https://lovepirate77.files.wordpress.com/2016/02/img_7637.png");
        employeeRepository.save(Malcolm);

        Employee Ray = new Employee("Ray Arnold", "Chief Computer Technician", "https://vignette.wikia.nocookie.net/jurassicpark/images/8/84/JP-Rayarnold.jpg");
        employeeRepository.save(Ray);

        Employee Dennis = new Employee("Dennis Nedry", "Genius", "https://carboncostume.com/wordpress/wp-content/uploads/2015/10/dennisnedry.jpg");
        employeeRepository.save(Dennis);



    }
}
