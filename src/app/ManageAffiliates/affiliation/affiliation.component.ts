import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AffiliateI } from 'app/models/affiliate.interface';
import { ApiService } from 'app/services/api.service';
import { NavbarComponent } from 'app/shared/navbar/navbar.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-affiliation',
  templateUrl: './affiliation.component.html',
  styleUrls: ['./affiliation.component.scss']
})
export class AffiliationComponent implements OnInit {
  public affiliate: AffiliateI
  private routeSub: Subscription

  public affiliateForm = new FormGroup({
    ID : new FormControl(),
    Name : new FormControl(),
    Type : new FormControl(),
    Province : new FormControl(),
    Canton : new FormControl(),
    District : new FormControl(),
    PhoneNum : new FormControl(),
    Email : new FormControl(),
    SINPE : new FormControl(),
    AdminID : new FormControl(),
    Banner : new FormControl()
  })

  constructor(private route:ActivatedRoute, private api:ApiService, private router:Router) { }

  onAccept(){
    console.log(this.affiliate)
    // HACER POST POR EL API
    this.router.navigate(['/affiliates'])
  }
  onDeny(){
    console.log(this.affiliate)
    if(confirm("Are you sure you want to deny this affiliation request?")){
      // HACER DELETE POR EL API
    }
    this.router.navigate(['/affiliates'])
  }

  ngOnInit(): void {
    this.affiliateForm.disable()

    this.affiliate = {
      ID : "2020034547",
      Name : "McDonalds",
      Type : "Restaurante",
      Province : "San Jose",
      Canton : "Santa Ana",
      District : "Uruca",
      PhoneNum : "88888888",
      Email : "mcdonalds@gmail.com",
      SINPE : "88888888",
      AdminID : "2020034547",
      Status : "Accepted",
      Banner : null
    }

    this.routeSub = this.route.params.subscribe(params => {
      console.log(params['id'])
      //PEDIR AL API EL EMPLOYEE CON EL PARAMETRO DEL ID Y REEMPLAZAR EL VALOR DE this.employee

      this.affiliateForm.patchValue(this.affiliate)
    })
  }
}
