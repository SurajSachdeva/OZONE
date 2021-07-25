import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KycRoutingModule } from './kyc-routing.module';
import { KycFormComponent } from './pages/kyc-form/kyc-form.component';


@NgModule({
  declarations: [
    KycFormComponent
  ],
  imports: [
    CommonModule,
    KycRoutingModule
  ]
})
export class KycModule { }
