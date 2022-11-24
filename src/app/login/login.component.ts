import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { RouteService } from 'app/services/route.service';
import { Router } from '@angular/router';
import { LoginI } from 'app/models/login.interface';



/*export const Admin: Routes = [
  { path: '', component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('../layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
  }]}
]

export const Affiliate: Routes = [
  { path: '/products', title: 'Manage Products'},
]

export const Client: Routes = [
  { path: '/user', title: 'User Profile'},
]*/


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    user : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })
  loginResponse : LoginI

  constructor(private api:ApiService, private routeService:RouteService, private router:Router) { }
  
  ngOnInit(): void {
  }

  affiliationRequest() {
    this.router.navigate(['/request-affiliation/step-1'])
  }
  newUserRequest() {
    this.router.navigate(['/register'])
  }

  onLogin(form) {
    this.api.login(form.user,form.password).subscribe(response => {
      console.log(response[0])
      if (response[0].Type == "admin") {
        //CHANGE TO USER ID
        this.routeService.switch("admin", "0")
      }
      else if (response[0].Type == "affiliate" && response[0].ID_client == "accepted") {
        //CHANGE TO USER ID
        
        this.routeService.switch("affiliate", response[0].ID_Admin)
        this.routeService.setAf(response[0].ID_Affiliate)
      }
      else if (response[0].Type == "cliente") {
        //CHANGE TO USER ID
        this.routeService.switch("client", response[0].ID_client)
      }
      else {
        alert("Username and password does not match")
      }
    })
    
  }
}

