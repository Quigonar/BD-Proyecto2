import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductI } from 'app/models/product.interface';
import { ApiService } from 'app/services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
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
  })

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    this.product.Picture = event && event.item(0);
  }

  constructor(private route:ActivatedRoute, private api:ApiService, private router:Router) { }

  onAdd(form){
    this.product = form
    
    console.log(this.product)
    // HACER POST POR EL API UTILIZANDO EL ID DEL AFILIADO
    this.router.navigate(['/products/', this.affiliateID])
  }

  ngOnInit(): void {
    this.product = {
      ID : '',
      Name : '',
      Price : '',
      Category: '',
      Picture : null
    }
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params['id'])
      this.affiliateID = params['id']
    })
  }
}
