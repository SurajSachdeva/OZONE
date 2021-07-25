import { Component, OnInit } from '@angular/core';
import { SharedService } from './../../../shared/services/shared.service';
import { AppService } from './../../../../services/app.service';
import { LoginUserModel } from './../../../../models/user/index';
import { Role } from './../../../../models/user/role';
import {  LoginPageComponent } from './../../../../components/pages/login-page/login-page.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {  

  constructor(
    private sharedService: SharedService,
    private appService: AppService
  ) {
  }

  ngOnInit(): void {}

  get userName() {
    var userDetail = this.appService.getLoginUserDetail();
    if (userDetail) {
      return userDetail.Emp_Name;
    } else {
      return '';
    }
  }

  get userStatus() {
    var userDetail = this.appService.getLoginUserDetail();
    if (userDetail) {
      return userDetail.E_Status;
    } else {
      return '';
    }
  }

  get userDOJ() {
    var userDetail = this.appService.getLoginUserDetail();
    if (userDetail) {
      return userDetail.Emp_DOJ;
    } else {
      return '';
    }
  }

  get isAdmin(){
    var userRole = this.appService.getLoginUserDetail();
    if(userRole) {
      return userRole.User_Role === "Admin"
    }
    else{
      return '';
    }
  }
  
  onLogOut() {
    this.appService.logOut();
  }
}
