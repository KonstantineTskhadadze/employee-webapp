package com.employee.webapp.rest;

import com.employee.webapp.model.Employee;
import com.employee.webapp.model.EmployeeRepository;
import com.employee.webapp.service.EmployeeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class EmployeeController {

    private final EmployeeService employeeService;

    public EmployeeController(final EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("/get")
    public List<Employee> getEmployees() {
        return employeeService.getEmployeeRepository()
                .findAll();
    }

    @PutMapping("/put")
    @PostMapping("/post")
    public void saveEmployee(@RequestBody final Employee employee) {
        final EmployeeRepository employeeRepository = employeeService.getEmployeeRepository();
        employeeRepository.save(employee);
    }

    @DeleteMapping("/delete")
    public void deleteEmployee(@RequestBody final Employee employee) {
        final EmployeeRepository employeeRepository = employeeService.getEmployeeRepository();
        employeeRepository.delete(employee);
    }
}
