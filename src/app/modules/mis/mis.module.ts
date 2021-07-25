import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MisRoutingModule } from './mis-routing.module';
import { MisFormComponent } from './pages/mis-form/mis-form.component';


@NgModule({
  declarations: [
    MisFormComponent
  ],
  imports: [
    CommonModule,
    MisRoutingModule
  ]
})
export class MisModule { }
