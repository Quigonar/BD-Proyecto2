import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminI } from 'app/models/admin.interface';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-dealers',
  templateUrl: './dealers.component.html',
  styleUrls: ['./dealers.component.scss']
})
export class DealersComponent implements OnInit {
  public dealers: AdminI[]

  constructor(private router:Router, private api:ApiService) { }

  addDealer(){
    this.router.navigate(['/add-dealer'])
  }
  editDealer(id:any) {
    this.router.navigate(['/edit-dealer/', id])
  }
  deleteDealer(id:any) {
    if (confirm("Are you sure you want to delete this account")) {
      //HACER DELETE POR EL API DEL ID DEL DEALER 
      this.api.deleteDealer(id).subscribe(response => {
        console.log(response)
        window.location.reload()
      })
    }
  }

  ngOnInit(): void {
    //PEDIR DEL API LA LISTA DE DEALERS Y REEMPLAZAR ESTA this.dealers
    this.api.getDealers().subscribe(dealers => {
      console.log(dealers)
      this.dealers = dealers
    })
  }

}
