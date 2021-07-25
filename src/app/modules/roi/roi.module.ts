import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoiRoutingModule } from './roi-routing.module';
import { RoiComponent } from './pages/roi/roi.component';


@NgModule({
  declarations: [
    RoiComponent
  ],
  imports: [
    CommonModule,
    RoiRoutingModule
  ]
})
export class RoiModule { }
