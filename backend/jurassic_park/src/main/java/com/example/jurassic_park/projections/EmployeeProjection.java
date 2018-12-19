package com.example.jurassic_park.projections;

import com.example.jurassic_park.models.Employee;
import org.springframework.data.rest.core.config.Projection;

@Projection(name="embedEmployee", types = Employee.class)
public interface EmployeeProjection {
    long getId();
    String getName();
    String getJobTitle();
    String getImageURL();
}
