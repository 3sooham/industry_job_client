import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './_helpers/auth.guard';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { IndustryJobsComponent } from './industry-jobs/industry-jobs.component';

const routes: Routes = [
  // 이거 모든 루트는 AppComponent 템플릿 위에서 바뀌는거임
  { 
    path: '', component: HomeComponent, canActivate: [AuthGuard],
      children: [
        {
          path: 'industry-jobs', component: IndustryJobsComponent
        }
      ]
  },
  { path: 'login', component: LoginComponent },
  // angular에서 **가 와일드카드임
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
