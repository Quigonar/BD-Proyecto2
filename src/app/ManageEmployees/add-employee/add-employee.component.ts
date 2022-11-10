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
    firstName : new FormControl(),
    firstLN : new FormControl(),
    secondLN : new FormControl(),
    ID : new FormControl(),
    username : new FormControl(),
    password : new FormControl(),
    province : new FormControl(),
    canton : new FormControl(),
    district : new FormControl(),
    phoneNum : new FormControl(),
    profilePic : new FormControl()
  })

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    const file = event && event.item(0);
    this.employee.ProfilePic = file;
  }

  constructor(private route:ActivatedRoute, private api:ApiService, private router:Router) { }

  onAdd(form){
    this.employee.ID = form.ID
    this.employee.FirstN = form.firstName
    this.employee.FirstLN = form.firstLN
    this.employee.SecondLN = form.secondLN
    this.employee.Username = form.username
    this.employee.Password = form.password
    this.employee.Province = form.province
    this.employee.Canton = form.canton
    this.employee.District = form.district
    this.employee.PhoneNum = form.phoneNum

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
