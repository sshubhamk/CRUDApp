import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  employees: any = [];
  objEmployee = new Employee();
  isSuccess: boolean;
  objEmployeeArray: any = [];
  userID: number;

  constructor(private employeeService: EmployeeService) {
    this.isSuccess = false;
    this.userID = 0;
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  // tslint:disable-next-line: typedef
  getEmployees() {
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
    });
  }

  // tslint:disable-next-line: typedef
  modify(id: number) {
    this.objEmployee = this.employees.filter((e) => e.id === id)[0];
  }

  // tslint:disable-next-line: typedef
  addUser() {
    this.objEmployee.mobilenumber = +this.objEmployee.mobilenumber;
    this.employeeService.addUser(this.objEmployee).subscribe(
      (result: any) => {
        this.isSuccess = true;
        this.getEmployees();
        this.objEmployee = new Employee();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // tslint:disable-next-line: typedef
  assignID(id: number) {
    this.userID = id;
  }

  // tslint:disable-next-line: typedef
  ResetForm() {
    this.objEmployee = new Employee();
  }

  // tslint:disable-next-line: typedef
  deleteUser(id: number) {
    this.employeeService.deleteUser(+id).subscribe(
      (result: any) => {
        this.isSuccess = true;
        this.getEmployees();
      },
      (error) => {
        console.log(error);
      }
    );
    this.userID = 0;
  }

  // tslint:disable-next-line: typedef
  modifyUser() {
    this.employeeService.modifyUser(this.objEmployee).subscribe(
      (result: any) => {
        this.isSuccess = true;
        this.getEmployees();
        this.objEmployee = new Employee();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
