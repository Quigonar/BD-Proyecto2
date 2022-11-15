import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductI } from 'app/models/product.interface';
import { ApiService } from 'app/services/api.service';
import { RouteService } from 'app/services/route.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public adding : boolean = false
  private routeSub: Subscription
  public product: ProductI
  public clientID : any
  public foodID : any
  public affiliateID : any
  public orderID : any
  public counter: number = 0
  public price : number = 0
  
  
  

  constructor(private api:ApiService, private router:Router, private route:ActivatedRoute, public user:RouteService) { }

  increase() {
    this.counter += 1
    this.counter = this.counter > 99 ? 99 : this.counter
    this.price = Number(this.product.Price) * this.counter
  }
  decrease() {
    this.counter -= 1
    this.counter = this.counter < 0 ? 0 : this.counter
    this.price = Number(this.product.Price) * this.counter
  }
  addToCart() {
    //ADD TO TEMP ORDER BY API TO CLIENT ID
    if (this.counter != 0) {
      console.log(this.product.Name + ": " + this.counter)
      this.router.navigate(['/restaurant/' + this.clientID + '/' + this.affiliateID])
    } 
  }
  editToCart(){
    //UPDATE TO TEMP ORDER BY API TO CLIENT ID
    if (this.counter != 0) {
      console.log(this.product.Name + ": " + this.counter)
      this.router.navigate(['/view-order/' + this.affiliateID + '/' + this.orderID])
    } 
  }

  ngOnInit(): void {
    this.product ={
        ID: "1",
        Name: "Pizza",
        Category: "Food",
        Price: "1000",
        Picture: null
      }
      

    this.routeSub = this.route.params.subscribe(params => {
      console.log(params['id'])
      this.clientID = params['id']
      this.affiliateID = params['rest']
      this.foodID = params['product']
      this.orderID = params['order']
      if (params['qty'] == '0') {
        this.adding = true
      }
      else {
        this.counter = params['qty']
        this.price = Number(this.product.Price) * this.counter
      }
      //PEDIR DEL API EL PRODUCTO DEL AFFILIADO CON EL PARAMETRO AFFILIATEID Y FOODID Y REEMPLAZAR this.product
    })
  }

}
