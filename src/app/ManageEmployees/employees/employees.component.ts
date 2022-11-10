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
    //HACER DELETE POR EL API DEL ID DEL EMPLOYEE 

    this.ngOnInit()
    //SINO VOLVER A PEDIR LISTA Y REEMPLAZAR this.employees DE NUEVO
  }

  ngOnInit(): void {
    //PEDIR DEL API LA LISTA DE EMPLEADOS Y REEMPLAZAR ESTA this.employees
    this.employees = [
      {
        FirstN : "Marcos",
        FirstLN : "Gonzalez",
        SecondLN : "Araya",
        ID : "2020034547",
        PhoneNum : "88888888",
        Province : "",
        Canton : "",
        District : "",
        Username : "quigonar",
        Password : "abcd",
        ProfilePic : null
      },
      {
        FirstN : "David",
        FirstLN : "De La Hoz",
        SecondLN : "Aguirre",
        ID : "2020044876",
        PhoneNum : "88888888",
        Province : "",
        Canton : "",
        District : "",
        Username : "shaky",
        Password : "abcd",
        ProfilePic : null
      },
      {
        FirstN : "Kenichi",
        FirstLN : "Hayakawa",
        SecondLN : "Bolaños",
        ID : "2020044884",
        PhoneNum : "88888888",
        Province : "",
        Canton : "",
        District : "",
        Username : "blades",
        Password : "abcd",
        ProfilePic : null
      },
      {
        FirstN : "Marcelo",
        FirstLN : "Truque",
        SecondLN : "Montero",
        ID : "2020426017",
        PhoneNum : "88888888",
        Province : "",
        Canton : "",
        District : "",
        Username : "machotm",
        Password : "abcd",
        ProfilePic : null
      },
      {
        FirstN : "Pepito",
        FirstLN : "Fernandez",
        SecondLN : "Jimenez",
        ID : "2020023657",
        PhoneNum : "88888888",
        Province : "",
        Canton : "",
        District : "",
        Username : "pepefj",
        Password : "abcd",
        ProfilePic : null
      },
    ]
  }
  
}
