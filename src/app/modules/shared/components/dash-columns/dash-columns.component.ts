import { Component, OnInit, Input } from '@angular/core';
import { AppService } from './../../../../services/app.service';
import { UserApi } from './../../../../apis/user-api.service';
import { dataCount } from './../../../../models/data-display';
import { ToastrService } from "ngx-toastr";


@Component({
  selector: 'app-dash-columns',
  templateUrl: './dash-columns.component.html',
  styleUrls: ['./dash-columns.component.css'],
})
export class DashColumnsComponent implements OnInit {

  
  soCount: dataCount[];

  constructor(
    private appService: AppService,
    private userAPI: UserApi,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.userAPI.getSO_Count_Data().subscribe(
      (count: any)  => {
        this.soCount = count.AdminDashBoard[0];
      },
      (err) => {
        this.toastr.error(err.status, "Count Status is down!")
      }
    )

    this.userAPI.getAD_Count_Data().subscribe(
      (count: any) => {
        this.soCount = count.AdminDashBoard[0];
      },
      (err) => {
        this.toastr.error(err.status, "Count Status is down!")
      }
    )
  }

  get isAdmin() {
    var userRole = this.appService.getLoginUserDetail();
    if (userRole) {
      return userRole.User_Role === 'Admin';
    } else {
      return '';
    }
  }

  // SO_Data_Count() {
  //   this.userAPI.getSO_Count_Data().subscribe(
  //     (soData: any) => {
  //       this.soCount = soData;
  //       console.log("this is so: ",this.soCount); 
  //       console.log("typeof: ",typeof(this.soCount));   
  //     }
  //   );
  // }

  // AD_Data_Count() {
  //   this.userAPI.getAD_Count_Data().subscribe(
  //     (adData: any) => {
  //       this.adCount = adData;
  //       console.log("this is ad: ",this.adCount);
  //       console.log("typeof ad: ",typeof(this.adCount)); 
  //     }
  //   );
  // }
  
}
