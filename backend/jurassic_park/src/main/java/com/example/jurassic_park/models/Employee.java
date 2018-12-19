package com.example.jurassic_park.models;

import javax.persistence.*;

@Entity
@Table(name="employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="jobTitle")
    private String jobTitle;

    @Column(name="imageURL")
    private String imageURL;

    public Employee(String name, String jobTitle, String imageURL) {
        this.name = name;
        this.jobTitle = jobTitle;
        this.imageURL = imageURL;
    }

    public Employee() {
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }
}
