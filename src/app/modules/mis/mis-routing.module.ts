import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisFormComponent } from './pages/mis-form/mis-form.component';

const routes: Routes = [
  {
    path: '',
    component: MisFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisRoutingModule {}
