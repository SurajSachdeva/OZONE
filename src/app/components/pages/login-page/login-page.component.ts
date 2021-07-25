import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserApi } from './../../../apis/user-api.service';
import { LoginUserModel, LoginResponse } from './../../../models/user/index';
import { AppService } from './../../../services/app.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userApi: UserApi,
    private appService: AppService,
    private router: Router,
    private titleService: Title
  ) {
    this.titleService.setTitle('Ozone - Login');
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.userApi
        .login(this.loginForm.value.userName, this.loginForm.value.password)
        .pipe(
          catchError((error) => {
            // const modalRef = this.modalService.open(AlertModalComponent, { centered: true });
            // modalRef.componentInstance.heading = "Error";
            // modalRef.componentInstance.message = `Please enter valid username and password`;
            return throwError(error);
          })
        )
        .subscribe((data: LoginResponse) => {
          if (
            data &&
            typeof data === 'object' &&
            data.userDetails &&
            data.userDetails.length
          ) {
            const userDetail = data.userDetails[0];
            var user: LoginUserModel = {
              Row_Id: userDetail.Row_Id,
              Emp_Code: userDetail.Emp_Code,
              Emp_Email: userDetail.Emp_Email,
              User_Role: userDetail.User_Role,
              Emp_ContactNo: userDetail.Emp_ContactNo,
              Emp_DOJ: userDetail.Emp_DOJ,
              Emp_DOB: userDetail.Emp_DOB,
              Emp_Name: userDetail.Emp_Name,
              HQ_Code: userDetail.HQ_Code,
              HQ_Name: userDetail.HQ_Name,
              Zone: userDetail.Zone,
              ASM_Name: userDetail.ASM_Name,
              SM_Name: userDetail.SM_Name,
              ZSM_Name: userDetail.ZSM_Name,
              E_Status: userDetail.E_Status,
              Division: userDetail.Division,
              Created_By: userDetail.Created_By,
              Created_On: userDetail.Created_On,
              IS_Active: userDetail.IS_Active,
              IS_Delete: userDetail.IS_Delete,
            };
            // data.userDetails.forEach((detail) => {
            //   user.Permissions.push({
            //     Permission: detail.Permission === 'Y',
            //     IS_Active: detail.IS_Active,
            //     IS_Delete: detail.IS_Delete,
            //   });
            // });
            this.appService.saveLoginUserDetail(user);
            this.router.navigate(['/dashboard']);
          }
        });
    } else {
      alert('Please enter username and password');
    }
  }
}
