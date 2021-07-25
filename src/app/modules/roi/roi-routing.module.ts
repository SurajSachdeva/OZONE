import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoiComponent } from './pages/roi/roi.component';

const routes: Routes = [
  {
    path: '',
    component: RoiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoiRoutingModule { }
