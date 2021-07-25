import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import {AppService} from './../services/app.service';
import { SO_Data_Display_response } from './../models/data-display'

@Injectable({
  providedIn: 'root'
})
export class KycApiService {

  constructor( private http : HttpClient, private appService: AppService) { }

  getProfileDetails(SO_Code: string){
        let params = new HttpParams().set("SO_Code", SO_Code);
        return this.http.get<SO_Data_Display_response>(`${this.appService.apiBaseUrl}/SoDashBoardData/GetSoKYCDetailsDetails?`, { params });
    }
}
