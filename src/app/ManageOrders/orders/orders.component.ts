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
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params['id'])
      this.affiliateID = params['id']
      this.api.getOrderIDAf(this.affiliateID).subscribe(orders => {
        console.log(orders)
        this.orders = orders
      })
      //PEDIR DEL API LA LISTA DE ORDENES DEL AFFILIADO CON EL PARAMETRO ID Y REEMPLAZAR this.orders
    })
  }
}
