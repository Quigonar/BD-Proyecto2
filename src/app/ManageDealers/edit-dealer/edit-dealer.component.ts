import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminI } from 'app/models/admin.interface';
import { ApiService } from 'app/services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-dealer',
  templateUrl: './edit-dealer.component.html',
  styleUrls: ['./edit-dealer.component.scss']
})
export class EditDealerComponent implements OnInit {
  public admin: AdminI
  private routeSub: Subscription

  public adminForm = new FormGroup({
    ID : new FormControl(),
    FirstN : new FormControl(),
    FirstLN : new FormControl(),
    SecondLN : new FormControl(),
    Email : new FormControl(),
    Username : new FormControl(),
    Password : new FormControl(),
    Province : new FormControl(),
    Canton : new FormControl(),
    District : new FormControl(),
    PhoneNum : new FormControl(),
    ProfilePic : new FormControl()
  })

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    this.api.getBase64(event.item(0)).then((imagen: any) => {
      this.admin.ProfilePic = imagen.base
    })
  }

  constructor(private route:ActivatedRoute, private api:ApiService, private router:Router) { }

  onEdit(form){
    this.admin.FirstN = form.FirstN
    this.admin.FirstLN = form.FirstLN
    this.admin.SecondLN = form.SecondLN
    this.admin.Username = form.Username
    this.admin.Email = form.Email
    this.admin.Password = form.Password
    this.admin.Province = form.Province
    this.admin.Canton = form.Canton
    this.admin.District = form.District
    this.admin.PhoneNum = form.PhoneNum
    this.admin.Status = ''

    console.log(this.admin)
    // HACER UPDATE POR EL API
    this.api.updateDealer(this.admin).subscribe(response => {
      console.log(response)
      this.router.navigate(['/dealers'])
    })
  }

  ngOnInit(): void {
    this.adminForm.controls['ID'].disable()

    this.routeSub = this.route.params.subscribe(params => {
      //PEDIR AL API EL EMPLOYEE CON EL PARAMETRO DEL ID Y REEMPLAZAR EL VALOR DE this.employee
      this.api.getDealerID(params['id']).subscribe(admin => {
        this.admin = admin[0]
        this.adminForm.patchValue(this.admin)
      })
      

      
    })
  }

}

