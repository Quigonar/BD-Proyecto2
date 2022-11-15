import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminI } from 'app/models/admin.interface';
import { AffiliateI } from 'app/models/affiliate.interface';
import { CommerceI } from 'app/models/commerce.interface';
import { ApiService } from 'app/services/api.service';
import { RouteService } from 'app/services/route.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-affiliate',
  templateUrl: './add-affiliate.component.html',
  styleUrls: ['./add-affiliate.component.scss']
})
export class AddAffiliateComponent implements OnInit {
  public affiliate: AffiliateI
  public admins: AdminI[]
  public commerces: CommerceI[]
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
    AdminID : new FormControl()
  })

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    this.affiliate.Banner = event && event.item(0);
  }

  constructor(private route:ActivatedRoute, private api:ApiService, private router:Router, public user:RouteService) { }

  onAdd(form){
    this.affiliate = form
    

    console.log(this.affiliate)

    if (this.user.userLogged() == 'admin') {
      // HACER POST POR EL API HACIA MAIN DATA BASE
      this.router.navigate(['/affiliates'])
    }
    else if (this.user.userLogged() == 'login') {
      // HACER POST POR EL API HACIA TEMP DATA BASE
      alert ("Your request has been sent, wait for approval")
      this.router.navigate(['/login'])
    }
  }

  ngOnInit(): void {
    //REPLACE this.commerces AND this.admins WITH API OBTAINED VALUES
    this.affiliate = {
      ID : '',
      Name : '',
      Type : '',
      Province : '',
      Canton : '',
      District : '',
      PhoneNum : '',
      Email : '',
      SINPE : '',
      AdminID : '',
      Status : '',
      Banner : null    
    }
  }
}
