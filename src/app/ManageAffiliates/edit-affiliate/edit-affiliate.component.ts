import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminI } from 'app/models/admin.interface';
import { AffiliateI } from 'app/models/affiliate.interface';
import { CommerceI } from 'app/models/commerce.interface';
import { ApiService } from 'app/services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-affiliate',
  templateUrl: './edit-affiliate.component.html',
  styleUrls: ['./edit-affiliate.component.scss']
})
export class EditAffiliateComponent implements OnInit {
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
    AdminID : new FormControl(),
    Banner : new FormControl()
  })

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    this.api.getBase64(event.item(0)).then((imagen: any) => {
      this.affiliate.Banner = imagen.base
    })
  }

  constructor(private route:ActivatedRoute, private api:ApiService, private router:Router) { }

  onEdit(form){
    this.affiliate.Name = form.Name
    this.affiliate.Type = form.Type
    this.affiliate.Province = form.Province
    this.affiliate.Canton = form.Canton
    this.affiliate.District = form.District
    this.affiliate.PhoneNum = form.PhoneNum
    this.affiliate.Email = form.Email
    this.affiliate.SINPE = form.SINPE
    this.affiliate.AdminID = form.AdminID
    this.affiliate.Status = ''

    console.log(this.affiliate)
    // HACER UPDATE POR EL API
    this.api.updateAffiliate(this.affiliate).subscribe(response => {
      console.log(response)
      this.router.navigate(['/affiliates'])
    })
    
  }

  ngOnInit(): void {
    //REPLACE this.commerces AND this.admins WITH API OBTAINED VALUES
    this.api.getCommerces().subscribe(commerces => {
      this.commerces = commerces
    })
    this.api.getAdmins().subscribe(admins => {
      this.admins = admins
    })
    
    this.affiliateForm.controls['ID'].disable()

    this.routeSub = this.route.params.subscribe(params => {
      console.log(params['id'])
      //PEDIR AL API EL EMPLOYEE CON EL PARAMETRO DEL ID Y REEMPLAZAR EL VALOR DE this.employee
      this.api.getAffiliateID(params['id']).subscribe(affiliate => {
        this.affiliate = affiliate[0]
        this.affiliateForm.patchValue(this.affiliate)
      })
      
    })
  }

}
