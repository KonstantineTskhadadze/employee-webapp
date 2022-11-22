package com.employee.webapp.rest;

import com.employee.webapp.model.Employee;
import com.employee.webapp.model.EmployeeRepository;
import com.employee.webapp.service.EmployeeService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class EmployeeController {

    private static final Logger logger = LogManager.getLogger(EmployeeController.class);
    private final EmployeeService employeeService;

    public EmployeeController(final EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("/get")
    public List<Employee> getEmployees(){
        try {
            EmployeeController.logger.info("GET: localhost:8080/get");
            final EmployeeRepository employeeRepository = this.employeeService.getEmployeeRepository();
            final List<Employee> employees = employeeRepository.findAll();
            EmployeeController.logger.info("RESPONSE: {}", () -> employees);
            return employees;
        } catch (final Exception e) {
            EmployeeController.logger.error(e.getClass() + ": " + e.getMessage());
            throw e;
        }
    }

    @PostMapping("/post")
    public void saveEmployee(@RequestBody final Employee employee) {
        try {
            EmployeeController.logger.info("POST: localhost:8080/post");
            final EmployeeRepository employeeRepository = this.employeeService.getEmployeeRepository();
            employeeRepository.save(employee);
            EmployeeController.logger.info("UPDATE: {}", () -> employeeRepository.findAll());
        } catch (final Exception e) {
            EmployeeController.logger.error(e.getClass() + ": " + e.getMessage());
            throw e;
        }
    }

    @DeleteMapping("/delete/{id}")
    public void deleteEmployee(@PathVariable("id") final String id) {
        try {
            EmployeeController.logger.info("DELETE: localhost:8080/delete/{" + id + "}");
            final EmployeeRepository employeeRepository = this.employeeService.getEmployeeRepository();
            employeeRepository.deleteById(Long.parseLong(id));
            EmployeeController.logger.info("UPDATE: {}", () -> employeeRepository.findAll());
        } catch (final Exception e) {
            EmployeeController.logger.error(e.getClass() + ": " + e.getMessage());
            throw e;
        }
    }
}
