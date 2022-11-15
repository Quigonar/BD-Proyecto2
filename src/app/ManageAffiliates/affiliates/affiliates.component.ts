import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AffiliateI } from 'app/models/affiliate.interface';
import { ApiService } from 'app/services/api.service';
import { RouteService } from 'app/services/route.service';

@Component({
  selector: 'app-affiliates',
  templateUrl: './affiliates.component.html',
  styleUrls: ['./affiliates.component.scss']
})
export class AffiliatesComponent implements OnInit {
  public openAffiliates:boolean = false
  public affiliates: AffiliateI[]
  
  constructor(private router:Router, private api:ApiService, public user:RouteService) {
    if (this.user.userLogged() == 'client') {
      this.openAffiliates = true
    }
   }

  addAffiliate(){
    this.router.navigate(['/add-affiliate'])
  }
  viewAffiliate(id:any){
    this.router.navigate(['/restaurant/' + this.user.userID() + '/' + id])
    console.log("view: " + id)
  }
  editAffiliate(id:any) {
    this.router.navigate(['/edit-affiliate/',id])
  }
  deleteAffiliate(id:any) {
    if (confirm("Are you sure you want to delete this affiliate")) {
      //HACER DELETE POR EL API DEL ID DEL AFFILIATE 
    }
    this.ngOnInit()
    //SINO VOLVER A PEDIR LISTA Y REEMPLAZAR this.affiliates DE NUEVO
  }

  dropAffiliate(){
    this.openAffiliates = !this.openAffiliates
  }

  ngOnInit(): void {


    //PEDIR DEL API LA LISTA DE EMPLEADOS Y REEMPLAZAR ESTA this.employees
    this.affiliates = [
      {
        ID : "2020034547",
        Name : "McDonalds",
        Type : "Restaurante",
        Province : "",
        Canton : "",
        District : "",
        PhoneNum : "",
        Email : "",
        SINPE : "",
        AdminID : "",
        Status : "Accepted",
        Banner : null
      },
      {
        ID : "2020044876",
        Name : "Licorera Magu",
        Type : "Licorera",
        Province : "",
        Canton : "",
        District : "",
        PhoneNum : "",
        Email : "",
        SINPE : "",
        AdminID : "",
        Status : "Accepted",
        Banner : null
      },
      {
        ID : "2020044884",
        Name : "Farmacia La Bomba",
        Type : "Farmacia",
        Province : "",
        Canton : "",
        District : "",
        PhoneNum : "",
        Email : "",
        SINPE : "",
        AdminID : "",
        Status : "Accepted",
        Banner : null
      },
      {
        ID : "2020426017",
        Name : "Pricesmart",
        Type : "Supermercado",
        Province : "",
        Canton : "",
        District : "",
        PhoneNum : "",
        Email : "",
        SINPE : "",
        AdminID : "",
        Status : "Accepted",
        Banner : null
      },
      {
        ID : "2020023657",
        Name : "Papa Johns",
        Type : "Restaurante",
        Province : "",
        Canton : "",
        District : "",
        PhoneNum : "",
        Email : "",
        SINPE : "",
        AdminID : "",
        Status : "Accepted",
        Banner : null
      }
    ]
  }

}
