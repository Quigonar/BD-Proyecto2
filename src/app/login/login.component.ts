import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { RouteService } from 'app/services/route.service';



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

  id:string;

  constructor(private api:ApiService, private routeService:RouteService) { }
  
  ngOnInit(): void {
  }

  onLogin(form) {
    /*if (form.user != "" && form.password != "") {
      this.api.login(form).subscribe(data => {
        console.log(data)
        if (data.status == "ok" && data.type == "Trabajador") {
          this.user.setType(false)
          this.router.navigate(['/','workers'])
        }
        else if (data.status == "ok" && data.type == "Cliente") {
          this.user.setType(true)
          this.id = data.id
          this.user.setID(this.id)
          //console.log("id: " + this.user.getID())
          this.router.navigate(['/','user'])
        }
        else{
          alert("Password or username does not match")
        }
      })
      this.api.login(form)
      this.router.navigate(['/','products'])

      RouterModule.forRoot()
    }*/
    if (form.user == "admin" && form.password == "admin") {
      this.routeService.switch("admin")
    }
    else if (form.user == "affiliate" && form.password == "affiliate") {
      this.routeService.switch("affiliate")
    }
    else if (form.user == "client" && form.password == "client") {
      this.routeService.switch("client")
    }
    else {
      alert("Please fill out the username and password")
    }
  }
}

