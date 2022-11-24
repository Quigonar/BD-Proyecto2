import { Component, OnInit } from '@angular/core';
import { Report1I } from 'app/models/report1.interface';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-report1',
  templateUrl: './report1.component.html',
  styleUrls: ['./report1.component.scss']
})
export class Report1Component implements OnInit {
  public report : Report1I[]
  public headerRow:string[] = ["Afiliado", "Compras", "Monto Total", "Monto Servicio"]
  public compras : string[] = []
  public total : string[] = []
  public servicio : string[] = []
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getReport1().subscribe(report => {
      this.report = report
      console.log(this.report)
      for (let client of this.report) {
        let compras = 0
        let total = 0
        let servicio = 0
        for (let product of client.Products) {
          compras += Number(product)
        }
        for (let total_ of client.Totales) {
          total += Number(total_)
        }
        for (let service of client.Servicio) {
          servicio += Number(service)
        }
        this.compras.push(compras.toString())
        this.total.push(total.toString())
        this.servicio.push(servicio.toString())
      }
      
    })
  }

}
