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
      this.api.deleteAdmin(id).subscribe(response => {
        console.log(response)
        window.location.reload()
      })
    }
  }
  dropAdmin() {
    this.openAdmins = !this.openAdmins
  }

  ngOnInit(): void {
    //PEDIR DEL API LA LISTA DE ADMINS Y REEMPLAZAR ESTA this.admins
    this.api.getAdmins().subscribe(admins => {
      this.admins = admins
      console.log(this.admins)
    })
  }
  
}
