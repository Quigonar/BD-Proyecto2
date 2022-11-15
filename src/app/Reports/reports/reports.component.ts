import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  public expand1: boolean = false
  public expand2: boolean = false
  
  constructor(private router:Router, private api:ApiService) { }

  expandReport1() {
    this.expand1 = !this.expand1
  }
  expandReport2() {
    this.expand2 = !this.expand2
  }
  downloadReport1() {
    //CALL API TO DOWNLOAD REPORT 1
  }
  downloadReport2() {
    //CALL API TO DOWNLOAD REPORT 2
  }

  ngOnInit(): void {
  }

}
