import { Component } from '@angular/core';
import { AuthenticationService } from './_services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'industry_job_client';
  portraitUrl = 'https://images.evetech.net/characters/1338057886/portrait'
  name: any;

  constructor(
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser
      .subscribe({
        next: (v) => this.name = v.name
      });
  }
}