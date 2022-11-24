import { Component, OnInit } from '@angular/core';
import { Report2I } from 'app/models/report2.interface';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-report2',
  templateUrl: './report2.component.html',
  styleUrls: ['./report2.component.scss']
})
export class Report2Component implements OnInit {
  public report : Report2I[]
  public headerRow:string[] = ["Afiliado", "Compras", "Monto Total", "Monto Servicio"]
  public compras : any
  public total : any
  public servicio : any

  constructor(private api:ApiService) { }
  

  ngOnInit(): void {
    this.api.getReport2().subscribe(report => {
      this.report = report
      let compras = 0
      let total = 0
      let servicio = 0
      for (let affiliate of this.report) {
        compras += affiliate.Sells
        total += affiliate.Total
        servicio += affiliate.Service
      }
      this.compras = compras
      this.total = total
      this.servicio = servicio
    })
  }

}
