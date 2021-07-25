import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UserApi } from './../../../../apis/user-api.service';
import { KycApiService } from './../../../../apis/kyc-api.service';
import { AppService } from './../../../../services/app.service';
import {
  SO_Data_Display,
  AD_Data_Display,
  SO_Data_Display_Response
} from './../../../../models/data-display/index';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  @Input() so;

  data1: SO_Data_Display[];
  data2: AD_Data_Display[];

  emp_code: string;
  user_role: string;

  constructor(
    private user: UserApi,
    private titleService: Title,
    private service: AppService,
    private kycApi: KycApiService
  ) {
    this.titleService.setTitle('Ozone - Dashboard');
    const UserDetails = this.service.getLoginUserDetail();
    if (UserDetails) {
      this.emp_code = UserDetails.Emp_Code;
    }
  }

  ngOnInit() {
    const userRole = this.service.getLoginUserDetail();
    if (userRole) {
      this.user_role = userRole.User_Role;
      console.log(this.user_role);
    }

    this.kycApi.getDashboardList(userRole.Emp_Code).subscribe(
      (data: any) => {
        if( userRole.User_Role === "SO" ){
          this.data1 = data
          // console.log(this.data)
        }
      }
    )

    this.kycApi.getDashboardList(userRole.Emp_Code).subscribe(
      (data: any) => {
        if(userRole.User_Role === "Admin"){
          this.data2 = data ;
          // console.log(this.data)
        }
      }
    )
  }

  get isAdmin(){
    var userRole = this.service.getLoginUserDetail();
    if(userRole) {
      return userRole.User_Role === "Admin"
    }
    else{
      return '';
    }
  }
}