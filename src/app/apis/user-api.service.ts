import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root" 
})
export class UserApi {
    constructor(private http: HttpClient) { }

    login(userName: string, password: string) {
        let params = new HttpParams().set("EmailId", userName).set("OTP", password);
        return this.http.get<any>(`http://3.108.175.228:8080/API/UserLogin/ValidateUser`, { params } );
    }
    getSO_Count_Data(){
        return this.http.get<any>(`http://3.108.175.228:8080/API/SoDashBoardData/SODisplayDashBoard?`);
    }

    getAD_Count_Data(){
        return this.http.get<any>(`http://3.108.175.228:8080/API/SoDashBoardData/GetSODisplayDashBoardForAdmin?`);
    }
}
