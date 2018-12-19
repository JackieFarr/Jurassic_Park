package com.example.jurassic_park.repository.employees;

import com.example.jurassic_park.models.Employee;
import com.example.jurassic_park.projections.EmployeeProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmployeeProjection.class)
public interface EmployeeRepository extends JpaRepository<Employee, Long>, EmployeeRepositoryCustom {
}
