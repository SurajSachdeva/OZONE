import { Component, OnInit } from '@angular/core';
import { SharedService } from './../../../shared/services/shared.service';
import { AppService } from './../../../../services/app.service';
import { LoginUserModel } from './../../../../models/user/index';
import { Role } from './../../../../models/user/role';
import { ActivatedRoute, Router } from '@angular/router';
import {  LoginPageComponent } from './../../../../components/pages/login-page/login-page.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {  

  constructor(
    private sharedService: SharedService,
    private appService: AppService,
    private _router: Router,
    private  _route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this._route.paramMap.subscribe(parameterMap => 
      {
        const id = +parameterMap.get('id');
        this.getUser(id);
      })
  }

  private getUser(id: number){
    
  }

  get userID(){
    var userID = this.appService.getLoginUserDetail();
    if(userID) {
      return userID.Emp_Code;
    }else{
      return '';
    }
  }
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

  getUserCode(){
    var userDetail = this.appService.getLoginUserDetail();
    if (userDetail){
      return userDetail.Emp_Code;
    }else{

      return '';
    }
  }

  editProfile(){
    this._router.navigate(['/profile', this.getUserCode])
  }
  
  onLogOut() {
    this.appService.logOut();
  }
}
