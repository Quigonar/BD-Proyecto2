import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommerceI } from 'app/models/commerce.interface';
import { ApiService } from 'app/services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.scss']
})
export class AddTypeComponent implements OnInit {
  private commerce: CommerceI
  private routeSub: Subscription
  private file: any

  public commerceForm = new FormGroup({
    Name : new FormControl()
  })

  constructor(private route:ActivatedRoute, private api:ApiService, private router:Router) { }

  onAdd(form){
    this.commerce = form
    this.commerce.ID = 0

    console.log(this.commerce)
    // HACER POST POR EL API
    this.api.addCommerce(this.commerce).subscribe(response => {
      console.log(response)
      this.router.navigate(['/types'])
    })
  }

  ngOnInit(): void {
    this.commerce = {
      ID : 0,
      Name : ''
    }
  }

}
