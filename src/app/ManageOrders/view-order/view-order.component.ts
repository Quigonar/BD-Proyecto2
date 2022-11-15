import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderI } from 'app/models/order.interface';
import { ApiService } from 'app/services/api.service';
import { RouteService } from 'app/services/route.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent implements OnInit {
  public headerRow:string[] = ["Product", "Qty", "Price P/U"]
  public order:OrderI
  public affiliateID : any
  private routeSub: Subscription

  constructor(private api:ApiService, private router:Router, private route:ActivatedRoute, public user:RouteService) { }

  orderReady() {
    //CAMBIAR EL STATUS DE LA ORDEN A LISTA Y HACER EL UPDATE EN EL API
    this.order.Status = "Ready for pickup"
    console.log(this.order)
  }

  editItem(id:any, qty:any) {
    if (this.user.userLogged() == 'client') {
      this.router.navigate(['/product/' + this.order.ClientID + '/' + this.order.RestID + '/' + id + '/' + qty + '/' + this.order.ID])
    }
  }

  pay() {
    //HACER POST EN EL API DE LA ORDEN PARA QUE LE SALGA AL RESTAURANTE
    //CAMBIAR EL ESTADO A Payed
    this.order.Status = "Delivered" //TESTING
    /*this.router.navigate(['/shopping-cart/' + this.order.ClientID])*/
  }

  deliver() {
    //LLAMAR EL STORED PROCEDURE DEL API PARA QUE CAMBIE LOS STATUS
    console.log(this.order)
    this.router.navigate(['/orders/',this.affiliateID])
  }

  delivered() {
    //LLAMAR EL STORED PROCEDURE DEL API PARA QUE CAMBIE LOS STATUS
    this.router.navigate(['/feedback/' + this.order.ClientID + '/' + this.order.ID])
  }

  giveFeed() {
    this.router.navigate(['/feedback/' + this.order.ClientID + '/' + this.order.ID])
  }
  
  ngOnInit() {
    this.order = {
        ID: "1",
        RestID: "2020034547",
        RestName: "McDonalds",
        ClientID: "2020034547",
        ClientN : "Marcos",
        ClientLN : "Gonzalez",
        Province : "San Jose",
        Canton : "Santa Ana",
        District : "Uruca",
        Status : "Pending",
        Price : "1000",
        Products : ["Pizza", "Soda", "Hamburger"],
        ProductPrices : ["1000", "300", "4000"],
        ProductQuantities: ["2", "1", "1"],
        ProductIDs: ["1", "2", "3"]
      }
    

    this.routeSub = this.route.params.subscribe(params => {
      console.log(params['id'])
      this.affiliateID = params['id']
      //PEDIR DEL API LA ORDEN POR EL PARAMETRO ID DEL AFILIADO Y ID DE LA ORDEN Y REEMPLAZAR this.order
      //RECORDAR QUE PUEDE SER DE LA BASE TEMP O DE LA BASE NORMAL
    })
  }
}
