import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AdminI } from 'app/models/admin.interface';
import { ApiService } from 'app/services/api.service';
import { RouteService } from 'app/services/route.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit {
  public admins: AdminI[]
  public openAdmins:boolean = false

  constructor(private router:Router, private api:ApiService, public user: RouteService) { }

  addAdmin(){
    this.router.navigate(['/add-admin'])
  }
  editAdmin(id:any) {
    this.router.navigate(['/edit-admin/', id])
  }
  deleteAdmin(id:any) {
    if (confirm("Are you sure you want to delete this account")) {
      //HACER DELETE POR EL API DEL ID DEL ADMIN 
    }
    this.ngOnInit()
    //SINO VOLVER A PEDIR LISTA Y REEMPLAZAR this.admins DE NUEVO
  }
  dropAdmin() {
    this.openAdmins = !this.openAdmins
  }

  ngOnInit(): void {
    //PEDIR DEL API LA LISTA DE ADMINS Y REEMPLAZAR ESTA this.admins
    this.admins = [
      {
        ID:"2020034547",
        FirstN : "Marcos",
        FirstLN : "Gonzalez",
        SecondLN : "Araya",
        Email : "quigonar@gmail.com",
        PhoneNum : "88888888",
        Province : "",
        Canton : "",
        District : "",
        Username : "quigonar",
        Password : "abcd",
        ProfilePic : null
      },
      {
        ID:"2020044876",
        FirstN : "David",
        FirstLN : "De La Hoz",
        SecondLN : "Aguirre",
        Email : "shaky@gmail.com",
        PhoneNum : "88888888",
        Province : "",
        Canton : "",
        District : "",
        Username : "shaky",
        Password : "abcd",
        ProfilePic : null
      },
      {
        ID:"2020044884",
        FirstN : "Kenichi",
        FirstLN : "Hayakawa",
        SecondLN : "Bolaños",
        Email : "blades@gmail.com",
        PhoneNum : "88888888",
        Province : "",
        Canton : "",
        District : "",
        Username : "blades",
        Password : "abcd",
        ProfilePic : null
      },
      {
        ID:"2020426017",
        FirstN : "Marcelo",
        FirstLN : "Truque",
        SecondLN : "Montero",
        Email : "machotm@gmail.com",
        PhoneNum : "88888888",
        Province : "",
        Canton : "",
        District : "",
        Username : "machotm",
        Password : "abcd",
        ProfilePic : null
      },
      {
        ID:"2020023657",
        FirstN : "Pepito",
        FirstLN : "Fernandez",
        SecondLN : "Jimenez",
        Email : "pepefj@gmail.com",
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
