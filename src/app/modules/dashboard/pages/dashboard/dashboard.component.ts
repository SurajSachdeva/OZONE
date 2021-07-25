import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { UserApi } from './../../../../apis/user-api.service';
import { KycApiService } from './../../../../apis/kyc-api.service';
import { AppService } from './../../../../services/app.service';
import { SO_Data_Display, SO_Data_Display_response } from './../../../../models/data-display/index';
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
    
  @Input() item;

  data: SO_Data_Display[];
  emp_code: string;
  // filteredData: SO_Data_Display[];

  constructor(
    private user: UserApi,
    private titleService: Title,
    private service: AppService,
    private kycApi: KycApiService
  ) {
    this.titleService.setTitle('Ozone - KYC Details');
  }

  ngOnInit() {
    const userDetails = this.service.getLoginUserDetail();
    if (userDetails) {
      this.emp_code = userDetails.Emp_Code;
      // var code = this.emp_code
      // console.log(code);
      this.kycApi
      .getProfileDetails(this.emp_code)
      .subscribe((data: any) => {
        // console.log(code);
        this.data = data.R0001[0]
        }
      );
    }

    
  }


  // filterData(){
  //   this.filteredData = this.data;
  // }

  getData(){
    const userDetails = this.service.getLoginUserDetail();
    if (userDetails) {
      this.emp_code = userDetails.Emp_Code;
      // console.log(this.emp_code);

      // this.kycApi
      // .getProfileDetails(this.emp_code)
      // .subscribe((data: SO_Data_Display_response) => {
      //   // console.log(this.emp_code);
      //   if (data && typeof (data) === "object") {
      //     this.data = data.SO_Data;
      //   }
      // });
      // this.filterData();
    }
  }

}
