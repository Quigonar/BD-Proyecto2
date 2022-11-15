import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminI } from 'app/models/admin.interface';
import { ApiService } from 'app/services/api.service';
import { RouteService } from 'app/services/route.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit {
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
    this.admin.ProfilePic = event && event.item(0);
    
  }

  constructor(private route:ActivatedRoute, private api:ApiService, private router:Router, public user:RouteService) { }

  onAdd(form){
    this.admin = form
    

    console.log(this.admin)

    if (this.user.userLogged() == 'admin') {
      // HACER POST POR EL API HACIA MAIN DATA BASE
      this.router.navigate(['/affiliates'])
    }
    else if (this.user.userLogged() == 'login') {
      // HACER POST POR EL API HACIA TEMP DATA BASE
      this.router.navigate(['/request-affiliation/step-2'])
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
    }
  }

}
