import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KycFormComponent } from './pages/kyc-form/kyc-form.component';

const routes: Routes = [
  {
    path: '',
    component: KycFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KycRoutingModule {}
