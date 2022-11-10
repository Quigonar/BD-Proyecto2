import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AffiliateI } from 'app/models/affiliate.interface';
import { ApiService } from 'app/services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-affiliate',
  templateUrl: './add-affiliate.component.html',
  styleUrls: ['./add-affiliate.component.scss']
})
export class AddAffiliateComponent implements OnInit {
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

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    const file = event && event.item(0);
    this.affiliate.Banner = file;
  }

  constructor(private route:ActivatedRoute, private api:ApiService, private router:Router) { }

  onAdd(form){
    this.affiliate.ID = form.ID
    this.affiliate.Name = form.Name
    this.affiliate.Type = form.Type
    this.affiliate.Province = form.Province
    this.affiliate.Canton = form.Canton
    this.affiliate.District = form.District
    this.affiliate.PhoneNum = form.PhoneNum
    this.affiliate.Email = form.Email
    this.affiliate.SINPE = form.SINPE
    this.affiliate.AdminID = form.AdminID

    console.log(this.affiliate)
    // HACER POST POR EL API
    this.router.navigate(['/affiliates'])
  }

  ngOnInit(): void {
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
      Banner : null    
    }
  }
}
