import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderI } from 'app/models/order.interface';
import { ApiService } from 'app/services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  public headerRow:string[] = ["Order ID", "Customer Name", "Location", "Order Status", "Price"]
  public orders:OrderI[]
  public affiliateID : any
  private routeSub: Subscription

  constructor(private api:ApiService, private router:Router, private route:ActivatedRoute) { }

  viewOrder(id:any,order:any) {
    this.router.navigate(['/view-order/' + id + '/' + order])
  }

  deliver(order:any) {
    //HACER UN POST AL API PARA QUE HAGA EL PROCEDIMIENTO ALMACENADO
    console.log(order)
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
        Status : "Ready",
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
        Status : "Pending",
        Price : "6000",
        Products : [""],
        ProductPrices : [""],
        ProductQuantities: [""],
        ProductIDs: ["1", "2", "3"]
      },
      {
        ID: "4",
        RestID: "2020034547",
        RestName: "McDonalds",
        ClientID: "2020034547",
        ClientN : "Marcelo",
        ClientLN : "Truque",
        Province : "",
        Canton : "Cartago",
        District : "",
        Status : "Ready",
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
