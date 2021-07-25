import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { SharedModule } from './modules/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingpageComponent } from './components/pages/landingpage/landingpage.component';
import { FooterComponent } from './components/footer/footer.component';
import { DefaultLayoutComponent } from './components/pages/default-layout/default-layout.component';
import { RegisterUserComponent } from './components/pages/register-user/register-user.component';
import { DoctorScreenComponent } from './components/pages/doctor-screen/doctor-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LandingpageComponent,
    DefaultLayoutComponent,
    FooterComponent,
    RegisterUserComponent,
    DoctorScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
