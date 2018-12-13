package com.example.jurassic_park.models;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

public class Park {

    private String name;
    private int capacity;
    private ArrayList<Visitor> visitors;

    public Park(String name, int capacity) {
        this.name = name;
        this.capacity = capacity;
        this.visitors = new ArrayList<>();
    }

    public Park() {
    }

    public String getName() {
        return name;
    }

    public int getCapacity() {
        return capacity;
    }

    public ArrayList<Visitor> getVisitors() {
        return visitors;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public void setVisitors(ArrayList<Visitor> visitors) {
        this.visitors = visitors;
    }

    public void addVisitorToPark(Visitor visitor){
        this.visitors.add(visitor);
    }
}
