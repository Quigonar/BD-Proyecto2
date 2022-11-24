import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminI } from 'app/models/admin.interface';
import { ApiService } from 'app/services/api.service';
import { RouteService } from 'app/services/route.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-dealer',
  templateUrl: './add-dealer.component.html',
  styleUrls: ['./add-dealer.component.scss']
})
export class AddDealerComponent implements OnInit {
  private admin: AdminI
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
      this.adminForm.controls['ProfilePic'].setValue(imagen.base)
    })
  }

  constructor(private route:ActivatedRoute, private api:ApiService, private router:Router, public user:RouteService) { }

  onAdd(form){
    this.admin = form
    this.admin.Password = ''
    this.admin.Status = 'available'
    

    console.log(this.admin)

    if (this.user.userLogged() == 'admin') {
      // HACER POST POR EL API HACIA MAIN DATA BASE
      this.api.addDealer(this.admin).subscribe(response => {
        console.log(response)
        this.router.navigate(['/dealers'])
      })
    }
    
  }

  ngOnInit(): void {
    this.admin = {
      ID: '',
      FirstN: '',
      FirstLN: '',
      SecondLN: '',
      Email: '',
      Username: '',
      Password: '',
      Province: '',
      Canton: '',
      District: '',
      PhoneNum: '',
      ProfilePic: null,
      Status: '',
    }
  }

}