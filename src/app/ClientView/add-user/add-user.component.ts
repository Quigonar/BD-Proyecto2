import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientI } from 'app/models/client.interface';
import { ApiService } from 'app/services/api.service';
import { RouteService } from 'app/services/route.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  private routeSub: Subscription
  public client: ClientI

  public clientForm = new FormGroup({
    ID : new FormControl(),
    FirstN : new FormControl(),
    FirstLN : new FormControl(),
    SecondLN : new FormControl(),
    BDate : new FormControl(),
    Username : new FormControl(),
    Password : new FormControl(),
    Province : new FormControl(),
    Canton : new FormControl(),
    District : new FormControl(),
    PhoneNum : new FormControl()
  })

  constructor(public user:RouteService, private api:ApiService, private route:ActivatedRoute, private router:Router) { }

  onAdd(form: any) { 
    this.client = form
    console.log(this.client)
    //HACER EL POST EN EL API
    alert("Your account has been registered")
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
    this.client = {
      ID: "",
      FirstN: "",
      FirstLN: "",
      SecondLN:"",
      BDate: "",
      Username: "",
      Password: "",
      Province: "",
      Canton: "",
      District: "",
      PhoneNum: "",
      Status: "Available",
    }
  }
}
