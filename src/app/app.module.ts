import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// HttpClient 사용하기 위함
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { IndustryJobsComponent } from './industry-jobs/industry-jobs.component';

// interceptors
import { httpInterceptorProviders } from './_http-interceptors';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { KillMailComponent } from './components/kill-mail/kill-mail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular material
import { MatTableModule } from '@angular/material/table'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    IndustryJobsComponent,
    PaginatorComponent,
    KillMailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }