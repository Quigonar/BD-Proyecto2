import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminI } from 'app/models/admin.interface';
import { AffiliateI } from 'app/models/affiliate.interface';
import { CommerceI } from 'app/models/commerce.interface';
import { RequestI } from 'app/models/request.interface';
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
  private request: RequestI
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
      this.affiliateForm.controls['Banner'].setValue(imagen.base)
    })
  }

  constructor(private route:ActivatedRoute, private api:ApiService, private router:Router, public user:RouteService) { }

  onAdd(form){
    this.affiliate = form
    this.affiliate.Status = ''
    console.log(this.affiliate)

    if (this.user.userLogged() == 'admin') {
      // HACER POST POR EL API HACIA MAIN DATA BASE
      this.api.addAffiliate(this.affiliate).subscribe(response => {
        console.log(response)
        this.request.cedula_Afiliado = this.affiliate.ID
        this.request.status = 'accepted'
        console.log(this.request)
        this.api.addRequest(this.request).subscribe(response => {
          console.log(response)
          this.router.navigate(['/affiliates'])
        })
      })
    }
    else if (this.user.userLogged() == 'login') {
      // HACER POST POR EL API HACIA TEMP DATA BASE
      this.api.addAffiliate(this.affiliate).subscribe(response => {
        console.log(response)
        this.request.cedula_Afiliado = this.affiliate.ID
        this.request.status = 'pending'
        this.api.addRequest(this.request).subscribe(response => {
          alert ("Your request has been sent, wait for approval")
          this.router.navigate(['/login'])
        })
      })
    }
  }

  ngOnInit(): void {
    //REPLACE this.commerces AND this.admins WITH API OBTAINED VALUES
    this.api.getCommerces().subscribe(commerces => {
      this.commerces = commerces
    })
    this.api.getAdmins().subscribe(admins => {
      this.admins = admins
    })
    
    this.affiliate = {
      ID : '',
      Name : '',
      Type : 0,
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
    this.request = {
      num_Solicitud : 0,
      cedula_Afiliado : '',
      cedula_Empleado : '',
      comentario : '',
      status : '',
    }
  }
}
