import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductI } from 'app/models/product.interface';
import { ApiService } from 'app/services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  private product: ProductI
  private routeSub: Subscription
  private affiliateID: any

  public productForm = new FormGroup({
    Name : new FormControl(),
    Category : new FormControl(),
    Price : new FormControl(),
  })

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    this.api.getBase64(event.item(0)).then((imagen: any) => {
      this.product.Picture = imagen.base
    })
  }

  constructor(private route:ActivatedRoute, private api:ApiService, private router:Router) { }

  onEdit(form){
    this.product.Name = form.Name
    this.product.Category = form.Category
    this.product.Price = form.Price

    console.log(this.product)
    // HACER UPDATE POR EL API UTILIZANDO EL ID DEL AFILIADO
    this.api.updateProducto(this.product).subscribe(response => {
      console.log(response)
      this.router.navigate(['/products/', this.affiliateID])
    })
  }

  ngOnInit(): void {
    
    this.routeSub = this.route.params.subscribe(params => {
      //console.log(params['id'] + " " + params['product'])
      this.affiliateID = params['id']
      //PEDIR EL PRODUCTO DEL AFFILIADO CON EL PARAMETRO ID Y PRODUCT Y REEMPLAZAR this.product
      this.api.getProductoID(params['product']).subscribe(product => {
        this.product = product[0]
        this.productForm.patchValue(this.product)
      })
    })
  }
}
