import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { LandingpageComponent } from './components/pages/landingpage/landingpage.component';
import { DefaultLayoutComponent } from './components/pages/default-layout/default-layout.component';
import { RegisterUserComponent } from './components/pages/register-user/register-user.component';
import { DoctorScreenComponent } from './components/pages/doctor-screen/doctor-screen.component';
import { AuthGaurd } from './guards/auth.guard';
import { NoAuthGaurd } from './guards/no-auth.gaurd';

const routes: Routes = [
  {
    path:'',
    component: LandingpageComponent,
    canActivate: [NoAuthGaurd],
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [NoAuthGaurd],
  },
  {
    path: 'register',
    component: RegisterUserComponent,
    canActivate: [NoAuthGaurd]
  },
  {
    path: 'docpage',
    component: DoctorScreenComponent,
    canActivate: [NoAuthGaurd]
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [AuthGaurd],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            (x) => x.DashboardModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./modules/myprofile/myprofile.module').then(
            (x) => x.MyprofileModule
          ),
      },
      {
        path: 'kyc',
        loadChildren: () =>
          import('./modules/kyc/kyc.module').then((x) => x.KycModule),
      },
      {
        path: 'roi',
        loadChildren: () =>
          import('./modules/roi/roi.module').then((x) => x.RoiModule),
      },
      {
        path: 'mis',
        loadChildren: () =>
          import('./modules/mis/mis.module').then((x) => x.MisModule),
      },
    ],
  },

  {
    path: '**',
    component: LoginPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
