import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'app/services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  private clientID
  private routeSub: Subscription

  public feedback = new FormGroup({
    Feed : new FormControl(),
  })

  constructor(private api:ApiService, public router:Router, private route:ActivatedRoute) { }

  onSend(form) {
    console.log(form.Feed)
    //SEND TO API form.Feed BY CLIENT ID PARAMETER
    this.router.navigate(['/shopping-cart/', this.clientID])
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.clientID = params['id']
      console.log(this.clientID)
  })
  }
}
