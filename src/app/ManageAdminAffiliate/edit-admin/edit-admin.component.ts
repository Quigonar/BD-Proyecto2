import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminI } from 'app/models/admin.interface';
import { ApiService } from 'app/services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.scss']
})
export class EditAdminComponent implements OnInit {
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
    this.admin.ProfilePic = event && event.item(0);
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

    console.log(this.admin)
    // HACER UPDATE POR EL API
    this.router.navigate(['/employees'])
  }

  ngOnInit(): void {
    this.adminForm.controls['ID'].disable()

    this.admin = {
      ID: "2020034547",
      FirstN: "Marcos",
      FirstLN: "Gonzalez",
      SecondLN:"Araya",
      Email: "quigonar@gmail.com",
      Username: "quigonar",
      Password: "abcd",
      Province: "San Jose",
      Canton: "Santa Ana",
      District: "Uruca",
      PhoneNum: "85097252",
      ProfilePic: null,
    }

    this.routeSub = this.route.params.subscribe(params => {
      console.log(params['id'])
      //PEDIR AL API EL EMPLOYEE CON EL PARAMETRO DEL ID Y REEMPLAZAR EL VALOR DE this.employee

      this.adminForm.patchValue(this.admin)
    })
  }

}
