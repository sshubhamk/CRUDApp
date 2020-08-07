import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any> {
    return this.http.get('https://localhost:5001/employee/getemployees');
  }

  // tslint:disable-next-line: typedef
  addUser(objEmployee: Employee) {
    console.log(objEmployee);
    return this.http.post('https://localhost:5001/employee/addemployee', objEmployee);
  }

  modifyUser(objEmployee: Employee) {
    return this.http.post ('https://localhost:5001/employee/modifyemployee', objEmployee)
  }

  deleteUser(id: number) {
    return this.http.delete ('https://localhost:5001/employee/deleteemployee/'+id);
  }
}
