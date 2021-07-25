import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '../services/app.service';

@Injectable({
    providedIn:'root'
})
export class NoAuthGaurd implements CanActivate {
    constructor(
        private appService: AppService,
        private router: Router
    ) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        var userDetail = this.appService.getLoginUserDetail();
        if (userDetail && userDetail.Emp_Email) {
            this.router.navigate(["/dashboard"]);
            return false;
        } else {
            return true;
        }
    }


}
