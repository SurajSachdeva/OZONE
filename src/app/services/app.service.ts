import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUserModel } from '../models/user/index';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  readonly apiBaseUrl = "http://3.108.175.228:8080/API";

  constructor(private router: Router) { }

  public saveLoginUserDetail(user: LoginUserModel): void {
    localStorage.setItem("userDetail", JSON.stringify(user));
  }
  
  public getLoginUserDetail(): LoginUserModel | undefined {
    var userDetail = localStorage.getItem("userDetail");
    if (userDetail) {
      var user= JSON.parse(userDetail) as LoginUserModel;
      return user;
    } else {
      return undefined;
    }
  }

  public logOut() {
    localStorage.removeItem("userDetail");
    this.router.navigate(['/']);
  }
}
