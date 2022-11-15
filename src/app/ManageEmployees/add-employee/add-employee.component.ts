import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeI } from 'app/models/employee.interface';
import { ApiService } from 'app/services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  private employee: EmployeeI
  private routeSub: Subscription

  public employeeForm = new FormGroup({
    FirstN : new FormControl(),
    FirstLN : new FormControl(),
    SecondLN : new FormControl(),
    ID : new FormControl(),
    Username : new FormControl(),
    Password : new FormControl(),
    Province : new FormControl(),
    Canton : new FormControl(),
    District : new FormControl(),
    PhoneNum : new FormControl()
  })

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    this.employee.ProfilePic = event && event.item(0);
  }

  constructor(private route:ActivatedRoute, private api:ApiService, private router:Router) { }

  onAdd(form){
    this.employee = form
    

    console.log(this.employee)
    // HACER POST POR EL API
    this.router.navigate(['/employees'])
  }

  ngOnInit(): void {
    this.employee = {
      FirstN: '',
      FirstLN: '',
      SecondLN: '',
      ID: '',
      Username: '',
      Password: '',
      Province: '',
      Canton: '',
      District: '',
      PhoneNum: '',
      ProfilePic: null,
    }
  }

}
