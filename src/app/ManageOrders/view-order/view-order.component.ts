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
  public ready : boolean

  constructor(private api:ApiService, private router:Router, private route:ActivatedRoute, public user:RouteService) { }

  orderReady() {
    //CAMBIAR EL STATUS DE LA ORDEN A LISTA Y HACER EL UPDATE EN EL API
    this.ready = true
  }

  editItem(id:any, qty:any) {
    if (this.order.Status == 'pending') {
      if (this.user.userLogged() == 'client') {
        this.router.navigate(['/product/' + this.order.ClienteID + '/' + this.order.RestID + '/' + id + '/' + qty + '/' + this.order.ID])
      }
    }
  }

  pay() {
    //HACER POST EN EL API DE LA ORDEN PARA QUE LE SALGA AL RESTAURANTE
    this.api.createOrder(this.order.ID).subscribe(response => {
      console.log(response)
      this.user.setCart('0')
      alert("This order was sent successfully")
      window.location.reload()
    })
  }

  deliver() {
    //LLAMAR EL STORED PROCEDURE DEL API PARA QUE CAMBIE LOS STATUS
    this.api.readyOrder(this.order.ID).subscribe(response => {
      console.log(response)
      this.router.navigate(['/orders/',this.affiliateID])
    })
  }

  delivered() {
    //LLAMAR EL STORED PROCEDURE DEL API PARA QUE CAMBIE LOS STATUS
    this.api.receiveOrder(this.order.ID).subscribe(response => {
      console.log(response)
      window.location.reload()
    })
  }

  giveFeed() {
    this.router.navigate(['/feedback/' + this.order.ClienteID + '/' + this.order.ID])
  }
  
  ngOnInit() {
    

    this.routeSub = this.route.params.subscribe(params => {
      this.affiliateID = params['id']
      this.api.getOrderID(params['order']).subscribe(order => {
        console.log(order)
        this.order = order[0]
      })
    })
  }
}
