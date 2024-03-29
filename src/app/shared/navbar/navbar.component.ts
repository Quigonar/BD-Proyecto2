import { Component, OnInit, ElementRef } from '@angular/core';
import { Affiliate } from '../../sidebar/sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '@angular/router';
import { RouteService } from 'app/services/route.service';
import { ApiService } from 'app/services/api.service';
import { AffiliateI } from 'app/models/affiliate.interface';
import { time } from 'console';
import { ClientI } from 'app/models/client.interface';
import { OrderI } from 'app/models/order.interface';

@Component({
    // moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit{
    private listTitles: any[];
    location: Location;
    private toggleButton: any;
    private sidebarVisible: boolean;
    public bicycleVisible: boolean = false;
    public requests: AffiliateI[];
    public shoppingCart_: OrderI[];
    public client: ClientI;

    constructor(location: Location,  private element: ElementRef, private router:Router, public user:RouteService, private api:ApiService) {
      this.location = location;
          this.sidebarVisible = false;
    }

    logout(){
        this.user.switch('login','0')
        this.router.navigate(['login'])
    }

    shoppingCart(){
      this.router.navigate(['/shopping-cart/' + this.user.userID()])
    }

    ngOnInit(){
      this.listTitles = Affiliate.filter(listTitle => listTitle);
      const navbar: HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
      //GET FROM API THE CLIENT USER AND REPLACE this.client
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
        Status: "Occupied",
      }
      if (this.client.Status == "Occupied") {
        this.bicycleVisible = true
      }

      //GET FROM API ORDER AND REPLACE this.shoppingCart_
      this.api.getOrderIDUser(this.user.userID()).subscribe(shoppingCarts => {
        console.log(shoppingCarts)
        this.shoppingCart_ = shoppingCarts
      })

      //GET FROM API ALL AFFILIATION REQUESTS AND REPLACE this.requests
      this.api.getAffiliateStatus("pending").subscribe(requests => {
        this.requests = requests
      })
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };

    getTitle(){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }

      for(var item = 0; item < this.listTitles.length; item++){
          if(this.listTitles[item].path === titlee){
              return this.listTitles[item].title;
          }
      }
      return 'Home';
    }

    getAffiliations(id:any){
        console.log(id)
        this.router.navigate(['/affiliation/' + id])
    }
}
