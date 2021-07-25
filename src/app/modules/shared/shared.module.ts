import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbCollapseModule, NgbDropdownModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './components/header/header.component';
import { DashColumnsComponent } from './components/dash-columns/dash-columns.component';

@NgModule({
  declarations: [
    HeaderComponent,
    DashColumnsComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgbCollapseModule,
    NgbDropdownModule,
    ToastrModule.forRoot()
  ],
  exports:[
    HeaderComponent,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbCollapseModule,
    NgbDropdownModule,
    // NgbHighlight,
    DashColumnsComponent,
    RouterModule
  ]
})
export class SharedModule { }
