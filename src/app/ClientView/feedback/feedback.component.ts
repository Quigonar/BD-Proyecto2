import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedI } from 'app/models/feedback.interface';
import { OrderI } from 'app/models/order.interface';
import { ApiService } from 'app/services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  private clientID
  private orderID
  private routeSub: Subscription
  private feedInterface : FeedI
  private order : OrderI

  public feedback = new FormGroup({
    Feed : new FormControl(),
  })

  constructor(private api:ApiService, public router:Router, private route:ActivatedRoute) { }

  onSend(form) {
    this.feedInterface.compra = this.orderID
    this.feedInterface.feedback[0] = form.Feed
    this.api.getOrderID(this.orderID).subscribe(order => {
      console.log(order[0])
      this.order = order[0]
      this.feedInterface.afiliado = this.order.RestID
      this.api.getDealer(this.orderID).subscribe(dealer => {
        console.log(dealer[0])
        this.feedInterface.repartidor = Object.values(dealer[0])[0]
        //SEND TO API form.Feed BY CLIENT ID PARAMETER
        this.api.sendFeed(this.feedInterface).subscribe(result => {
          console.log(result)
          this.router.navigate(['/shopping-cart/', this.clientID])
        })
      })
    })
  }

  ngOnInit(): void {
    this.feedInterface = {
      compra : '',
      feedback : [],
      afiliado : '',
      repartidor : ''
    }
    this.routeSub = this.route.params.subscribe(params => {
      this.clientID = params['id']
      this.orderID = params['order']
  })
  }
}
