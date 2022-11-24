import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductI } from 'app/models/product.interface';
import { ApiService } from 'app/services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  private product: ProductI
  private routeSub: Subscription
  private file: any
  private affiliateID: any

  public productForm = new FormGroup({
    Name : new FormControl(),
    Category : new FormControl(),
    Price : new FormControl(),
    //Picture : new FormControl()
  })

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    this.api.getBase64(event.item(0)).then((imagen: any) => {
      //this.productForm.controls['Picture'] = imagen.base
      this.product.Picture = imagen.base
    })
  }

  constructor(private route:ActivatedRoute, private api:ApiService, private router:Router) { }

  onAdd(form){
    this.product.Name = form.Name
    this.product.Category = form.Category
    this.product.Price = form.Price
    this.product.AffiliateID = this.affiliateID
    
    console.log(this.product)
    // HACER POST POR EL API UTILIZANDO EL ID DEL AFILIADO
    this.api.addProducto(this.product).subscribe(response => {
      console.log(response)
      this.router.navigate(['/products/', this.affiliateID])
    })
  }

  ngOnInit(): void {
    this.product = {
      ID : 0,
      AffiliateID : '',
      Name : '',
      Price : 0,
      Category: '',
      Picture : ''
    }

    this.routeSub = this.route.params.subscribe(params => {
      console.log(params['id'])
      this.affiliateID = params['id']
    })
  }
}
