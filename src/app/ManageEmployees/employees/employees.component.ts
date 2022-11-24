import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeI } from 'app/models/employee.interface';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees: EmployeeI[]
  
  constructor(private router:Router, private api:ApiService) { }

  addEmployee(){
    this.router.navigate(['/add-employee'])
  }
  editEmployee(id:any) {
    this.router.navigate(['/edit-employee/',id])
  }
  deleteEmployee(id:any) {
    if (confirm("Are you sure you want to delete this account")) {
      //HACER DELETE POR EL API DEL ID DEL EMPLOYEE 
      this.api.deleteEmployee(id).subscribe(response => {
        console.log(response)
        window.location.reload()
      })
    }
    //SINO VOLVER A PEDIR LISTA Y REEMPLAZAR this.employees DE NUEVO
  }

  ngOnInit(): void {
    //PEDIR DEL API LA LISTA DE EMPLEADOS Y REEMPLAZAR ESTA this.employees
    this.api.getEmployees().subscribe(employees => {
      console.log(employees)
      this.employees = employees
    })
  }
  
}
