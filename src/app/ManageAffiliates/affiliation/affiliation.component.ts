import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AffiliateI } from 'app/models/affiliate.interface';
import { RequestI } from 'app/models/request.interface';
import { ApiService } from 'app/services/api.service';
import { RouteService } from 'app/services/route.service';
import { NavbarComponent } from 'app/shared/navbar/navbar.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-affiliation',
  templateUrl: './affiliation.component.html',
  styleUrls: ['./affiliation.component.scss']
})
export class AffiliationComponent implements OnInit {
  public affiliate: AffiliateI
  public request: RequestI
  private routeSub: Subscription
  public showTextBox: boolean = false

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

  constructor(private route:ActivatedRoute, private api:ApiService, private router:Router, private routeService:RouteService) { }

  onAccept(){
    // HACER POST POR EL API
    this.request.cedula_Afiliado = this.affiliate.ID
    this.request.cedula_Empleado = this.routeService.userID()
    this.request.status = "accepted"
    this.api.updateRequest(this.request).subscribe(response => {
      console.log(response)
      this.router.navigate(['/affiliates'])
    })
    
  }
  onDeny(){
    if(confirm("Are you sure you want to deny this affiliation request?")){
      let comment = prompt("Please specify why was it denied")
      // HACER DELETE POR EL API
      this.request.comentario = comment
      this.request.cedula_Afiliado = this.affiliate.ID
      this.request.cedula_Empleado = this.routeService.userID()
      this.request.status = "rejected"
      this.api.updateRequest(this.request).subscribe(response => {
        console.log(response)
        this.router.navigate(['/affiliates'])
      })
    }
  }

  ngOnInit(): void {
    this.affiliateForm.disable()

    this.request = {
      num_Solicitud : 0,
      cedula_Afiliado : '',
      cedula_Empleado : '',
      comentario : '',
      status : '',
    }

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
