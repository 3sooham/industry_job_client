import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../_services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (
    private router: Router, 
    private authenticationService: AuthenticationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // AuthenticationService가 로그인을 위한 토큰을 가지고 있으니까 여기에 값이 있으면 로그인되있는거니 true 리턴해줌. 
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser.name) {
      console.log('--------')
      console.log(currentUser)
      console.log('--------')
      return true
    }

    // 로그인 안 했으면 메시지 띄워주고
    alert("로그인 페이지로 이동합니다.");
    // 현재 url 로컬 스토리지에 저장하고 login 컴포넌트로 이동시켜줌
    this.authenticationService.returnUrl = state.url
    return this.router.navigate(['/login']);
  }
}