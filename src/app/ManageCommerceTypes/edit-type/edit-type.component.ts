import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommerceI } from 'app/models/commerce.interface';
import { ApiService } from 'app/services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-type',
  templateUrl: './edit-type.component.html',
  styleUrls: ['./edit-type.component.scss']
})
export class EditTypeComponent implements OnInit {
  private commerce: CommerceI
  private routeSub: Subscription
  private file: any

  public commerceForm = new FormGroup({
    ID : new FormControl(),
    Name : new FormControl()
  })

  constructor(private route:ActivatedRoute, private api:ApiService, private router:Router) { }

  onEdit(form){
    this.commerce.Name = form.Name

    console.log(this.commerce)
    // HACER UPDATE POR EL API
    this.api.updateCommerce(this.commerce).subscribe(response => {
      console.log(response)
      this.router.navigate(['/types'])
    })
  }

  ngOnInit(): void {
    this.commerceForm.controls['ID'].disable()
    //PEDIR AL API EL EMPLOYEE CON EL PARAMETRO DEL ID Y REEMPLAZAR EL VALOR DE this.commerce
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params['id'])
      this.api.getCommerceID(params['id']).subscribe(type => {
        this.commerce = type[0]
        this.commerceForm.patchValue(this.commerce)
      })
    })
  }
}
