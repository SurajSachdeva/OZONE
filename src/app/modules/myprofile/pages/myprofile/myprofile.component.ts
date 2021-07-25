import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserApi } from './../../../../apis/user-api.service';
import { LoginUserModel, LoginResponse } from './../../../../models/user';
import { AppService } from './../../../../services/app.service';


@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  
  kycForm: FormGroup;
  emp_code : string;
  data: LoginResponse[] = [];


  constructor(
    private fb: FormBuilder,
    private userApi: UserApi,
    private appService: AppService,
    private router: Router,
    private titleService: Title
  ) {
    this.titleService.setTitle('Ozone-MyProfile');
    const userDetails = this.appService.getLoginUserDetail();
    if(userDetails) {
      this.emp_code = userDetails.Emp_Code;
      console.log(userDetails);
    }
   }

  ngOnInit() {
    this.kycForm = this.fb.group({
      estatus: ['', Validators.required],
      ecode: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      cno: ['', Validators.required],
      dob: ['', Validators.required],
      month: ['', Validators.required],
      hqn: ['', Validators.required],
      hqc: ['', Validators.required],
      divi: ['', Validators.required],
      asm: ['', Validators.required],
      zsm: ['', Validators.required],
      sm: ['', Validators.required],
    })


    var user = this.appService.getLoginUserDetail()
    
  }

  getData(){
    

}
}
