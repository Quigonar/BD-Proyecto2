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

  elimOrder(id:any) {
    this.api.deleteOrder(id).subscribe(response => {
      console.log(response)
    })
  }
  
  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      //PEDIR DEL API LA LISTA DE ORDENES DEL AFFILIADO CON EL PARAMETRO ID Y REEMPLAZAR this.orders
      this.api.getOrderIDUser(params['id']).subscribe (orders => {
        this.orders = orders
      })
    })
  }
}
