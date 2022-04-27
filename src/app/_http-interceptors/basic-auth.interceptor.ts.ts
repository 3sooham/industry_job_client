import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AuthenticationService } from '../_services/authentication.service';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // 로그인해있으면 나가는 request 헤더에 토큰 넣어줌.
        // add authorization header with basic auth credentials if available
        const currentUser = this.authenticationService.currentUserValue;
        // 이거 value만 있으면 안되는지 해봐야함
        if (currentUser && currentUser.token) {
            req = req.clone({
                setHeaders: { 
                    Authorization: `Token ${currentUser.token}`
                }
            });
        }
    
        return next.handle(req);
    }
}