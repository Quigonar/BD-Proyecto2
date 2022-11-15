import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderI } from 'app/models/order.interface';
import { ApiService } from 'app/services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  public headerRow:string[] = ["Restaurant", "In Cart", "Status"]
  public orders:OrderI[]
  public affiliateID : any
  private routeSub: Subscription

  constructor(private api:ApiService, private router:Router, private route:ActivatedRoute) { }

  giveFeed(client:any, order:any) {
    this.router.navigate(['/feedback/' + client + '/' + order])
  }

  viewOrder(id:any,order:any) {
    this.router.navigate(['/view-order/' + id + '/' + order])
  }
  viewPast() {

  }
  elimOrder(id:any) {
    //HACER UN DELETE EN EL API PARA QUE BORRE ESE TEMP ORDEN
  }
  
  ngOnInit() {
    this.orders = [
      {
        ID: "1",
        RestID: "2020034547",
        RestName: "McDonalds",
        ClientID: "2020034547",
        ClientN : "Marcos",
        ClientLN : "Gonzalez",
        Province : "San Jose",
        Canton : "Santa Ana",
        District : "Uruca",
        Status : "Ready for pickup",
        Price : "1000",
        Products : [""],
        ProductPrices : [""],
        ProductQuantities: [""],
        ProductIDs: ["1", "2", "3"]
      },
      {
        ID: "2",
        RestID: "2020034547",
        RestName: "McDonalds",
        ClientID: "2020034547",
        ClientN : "David",
        ClientLN : "De La Hoz",
        Province : "",
        Canton : "Cartago",
        District : "",
        Status : "Pending",
        Price : "3000",
        Products : [""],
        ProductPrices : [""],
        ProductQuantities: [""],
        ProductIDs: ["1", "2", "3"]
      },
      {
        ID: "3",
        RestID: "2020034547",
        RestName: "McDonalds",
        ClientID: "2020034547",
        ClientN : "Kenichi",
        ClientLN : "Hayakawa",
        Province : "",
        Canton : "Cartago",
        District : "",
        Status : "Delivered",
        Price : "6000",
        Products : [""],
        ProductPrices : [""],
        ProductQuantities: [""],
        ProductIDs: ["1", "2", "3"]
      },
      {
        ID: "4",
        RestID: "2020064357",
        RestName: "McDonalds",
        ClientID: "2020034547",
        ClientN : "Marcelo",
        ClientLN : "Truque",
        Province : "",
        Canton : "Cartago",
        District : "",
        Status : "Ready for pickup",
        Price : "8000",
        Products : [""],
        ProductPrices : [""],
        ProductQuantities: [""],
        ProductIDs: ["1", "2", "3"]
      },
    ]

    this.routeSub = this.route.params.subscribe(params => {
      console.log(params['id'])
      this.affiliateID = params['id']
      //PEDIR DEL API LA LISTA DE ORDENES DEL AFFILIADO CON EL PARAMETRO ID Y REEMPLAZAR this.orders
    })
  }
}
