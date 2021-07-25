import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import {AppService} from './../services/app.service';
import {  } from './../models/data-display'

@Injectable({
  providedIn: 'root'
})
export class KycApiService {

  constructor( private http : HttpClient, private appService: AppService) { }

  getDashboardList(id: string){
        let params = new HttpParams().set("SO_Code", id);
        return this.http.get<any>(`${this.appService.apiBaseUrl}/SoDashBoardData/GetSODashboardDetails?`, { params });
    }
}
