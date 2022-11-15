import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminI } from 'app/models/admin.interface';
import { ClientI } from 'app/models/client.interface';
import { ApiService } from 'app/services/api.service';
import { RouteService } from 'app/services/route.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  private routeSub: Subscription
  public admin: AdminI
  public client: ClientI
  public edit: boolean

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

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    this.admin.ProfilePic = event && event.item(0);
  }

  constructor(public user:RouteService, private api:ApiService, private route:ActivatedRoute) { }

  onEnableEdit() {
    this.edit = true
      this.adminForm.enable()
      this.adminForm.controls['ID'].disable()
      this.clientForm.enable()
      this.clientForm.controls['ID'].disable()
  }

  onUpdate(form: any) { 
    this.edit = false
    alert("Your account has been updated successfully")
    this.adminForm.disable()
    this.clientForm.disable()


    if (this.user.userLogged() == 'affiliate') {
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

      //UPDATE EN EL API PARA EL ADMIN AFFILIADO
    }
    else if (this.user.userLogged() == 'client') {
      this.client.FirstN = form.FirstN
      this.client.FirstLN = form.FirstLN
      this.client.SecondLN = form.SecondLN
      this.client.Username = form.Username
      this.client.BDate = form.BDate
      this.client.Password = form.Password
      this.client.Province = form.Province
      this.client.Canton = form.Canton
      this.client.District = form.District
      this.client.PhoneNum = form.PhoneNum

      //UPDATE EN EL API PARA EL CLIENTE
    }
    this.ngOnInit()
    console.log(form)
  }

  onDelete(id:any) { 
    if (this.user.userLogged() == 'affiliate') {
      if (confirm("If you delete your profile, your affiliation will also be cancelled. Are you sure you want to delete it?")) {
        //DELETE EN EL API AL AFFILIATION ADMIN Y EL AFFILIATION
        this.user.switch("login", "0")
      }
      else { alert("Please contact us if you need to change the administrator of the affiliation") }
    }
    else if (this.user.userLogged() == 'client') {
      if (confirm("Are you sure you want to delete your account")) {
        //DELETE EN EL API AL CLIENTE
        this.user.switch("login", "0")
      }
    }
  }

  ngOnInit() { 
    

    if (this.user.userLogged() == 'affiliate') {
      this.adminForm.disable()
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
      console.log(this.user.userID())
      //PEDIR DEL API EL ADMIN Y REEMPLAZAR this.admin
      this.adminForm.patchValue(this.admin)
    }
    else if (this.user.userLogged() == 'client') {
      this.clientForm.disable()
      this.client = {
        ID: "2020034547",
        FirstN: "Marcos",
        FirstLN: "Gonzalez",
        SecondLN:"Araya",
        BDate: "2018-07-22",
        Username: "quigonar",
        Password: "abcd",
        Province: "San Jose",
        Canton: "Santa Ana",
        District: "Uruca",
        PhoneNum: "85097252",
        Status:"Available"
      }
      console.log(this.user.userID())
      //PEDIR DEL API EL CLIENTE Y REEMPLAZAR this.client
      this.clientForm.patchValue(this.client)
    }
  }
}
