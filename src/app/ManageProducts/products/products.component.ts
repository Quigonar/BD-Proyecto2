import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductI } from 'app/models/product.interface';
import { ApiService } from 'app/services/api.service';
import { RouteService } from 'app/services/route.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public clientView: boolean = false
  private routeSub: Subscription
  public products: ProductI[]
  public affiliateID : any
  public clientID : any
  public headerRow : string[] = ["Name", "Category", "Price"]
  

  constructor(private api:ApiService, private router:Router, private route:ActivatedRoute, public user:RouteService) { }

  changeView() {
    this.clientView = !this.clientView
  }
  addProduct(id:any) {
    this.router.navigate(['/add-product/' + id])
  }
  editProduct(id:any, product:any) {
    this.router.navigate(['/edit-product/' + id + '/' + product])
  }
  deleteProduct(id:any, product:any) {
    //HACER EL DELETE AL API DEL ID DEL PRODUCTO PARA EL AFILIADO POR ID
  }

  viewProduct(id:any) {
    this.router.navigate(['/product/' + this.clientID + '/' + this.affiliateID + '/' + id + '/0/0'])
  }

  ngOnInit(): void {
    if (this.user.userLogged() == 'client') {
      this.clientView = true
    }
    this.products = [
      {
        ID: "1",
        Name: "Pizza",
        Category: "Food",
        Price: "1000",
        Picture: null
      },
      {
        ID: "2",
        Name: "Hamburger",
        Category: "Food",
        Price: "4000",
        Picture: null
      },
      {
        ID: "3",
        Name: "Fries",
        Category: "Food",
        Price: "500",
        Picture: null
      },
      {
        ID: "4",
        Name: "Soda",
        Category: "Food",
        Price: "300",
        Picture: null
      },
      {
        ID: "5",
        Name: "Hot Dogs",
        Category: "Food",
        Price: "2000",
        Picture: null
      },
    ]

    this.routeSub = this.route.params.subscribe(params => {
      this.affiliateID = params['id']
      if (this.user.userLogged() == 'client') {
        this.clientID = params['client']
      }
      //PEDIR DEL API LA LISTA DE PRODUCTOS DEL AFFILIADO CON EL PARAMETRO ID Y REEMPLAZAR this.products
    })
  }

}
