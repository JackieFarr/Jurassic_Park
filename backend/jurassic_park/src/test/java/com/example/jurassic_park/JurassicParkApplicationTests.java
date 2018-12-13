package com.example.jurassic_park;

import com.example.jurassic_park.repository.dinosaurs.DinosaurRepository;
import com.example.jurassic_park.repository.paddocks.PaddockRepository;
import com.example.jurassic_park.repository.visitors.VisitorRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class JurassicParkApplicationTests {

	@Autowired
	DinosaurRepository dinosaurRepository;

	PaddockRepository paddockRepository;

	VisitorRepository visitorRepository;

	@Test
	public void contextLoads() {
	}

	@Test
	public void createDinosaurAndAddToPaddock(){

	}


}

