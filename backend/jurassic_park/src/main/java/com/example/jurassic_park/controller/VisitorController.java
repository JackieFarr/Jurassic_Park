package com.example.jurassic_park.controller;

import com.example.jurassic_park.repository.visitors.VisitorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/visitors")
public class VisitorController {

    @Autowired
    VisitorRepository visitorRepository;
}
