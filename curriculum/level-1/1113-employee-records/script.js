let employees = [];

class Employee {
    constructor (name, salary, jobTitle, status = "Full Time") {
        this.name = name;
        this.salary = salary;
        this.jobTitle = jobTitle;
        this.status = status;
        this.printEmployeeForm = function() {
            console.log(`Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: $${this.salary}/hour, Status: ${this.status}`);
        };
    };
};

let employee1 = new Employee("Jimmy", 100000, "comedian");
let employee2 = new Employee("Sarah", 200000, "SoftwareEngineer");
let employee3 = new Employee("Bobby", 85000, "Truck Driver");

employee1.printEmployeeForm();
employee2.printEmployeeForm();
employee3.printEmployeeForm();

employees.push(employee1, employee2, employee3);