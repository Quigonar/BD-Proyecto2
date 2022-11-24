import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommerceI } from 'app/models/commerce.interface';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {
  public headerRow:string[] = ["ID", "Name"]
  public types:CommerceI[]

  constructor(private api:ApiService, private router:Router) { }
  public addType(){
    this.router.navigate(['/add-type'])
  }
  public editType(id:any) {
    this.router.navigate(['/edit-type/' + id])
  }

  public elimType(id:any) {
    if (confirm("Are you sure you want to delete this commerce type")) {
      //HACER DELETE POR EL API DEL ID DEL TYPE 
      this.api.deleteCommerce(id).subscribe(response => {
        console.log(response)
        window.location.reload()
      })
    }
  }
  
  ngOnInit() {
    //CALL TYPES OF COMMERCE FROM API AND REPLACE this.types
    this.api.getCommerces().subscribe(commerces => {
      this.types = commerces
    })
  }
}
