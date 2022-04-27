import { Component, OnInit } from '@angular/core';

// 백엔드가 쿼리스트링으로 보내주는 백엔드 토큰 가져오기
import { ActivatedRoute} from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../_services/authentication.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  tokenUrl = environment.tokenUrl;

  // encodedUrl: string;
  // config: Config | undefined;
  // headers: string[] = [];
  // name: Post1 = {title: '테스트제목1', text: '테스트내용1'};
  // temp: Post1 = {title: '', text: ''};
  // testt: Config | undefined;

  constructor(
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    // test
    // private testService: TestService,
    private router: Router
  ) {

    // 장고에서 토큰 붙여서 redirect 해주면
    // 이거 토큰 rxjs로 해야할거같음
    const queryString = this.route.snapshot.queryParams;
    if ('token' in queryString) {
      // 로그인해서 토큰 로컬스토리지에 저장해주고
      this.authenticationService.login(queryString);

      const returnUrl = this.authenticationService.returnUrl;
      // 로그인 페이지 오기 전에 있던 곳으로 돌아감
      if (returnUrl) {
        // 돌아가기전에 로컬 스토리지의 returnUrl 비워줌
        this.authenticationService.removeReturnUrl();
        this.router.navigate([returnUrl]);
      }
      // 돌아갈 곳이 없으면 /로 보내줌
      else {
        this.router.navigate(['/']);
      }
    }

    if (this,authenticationService.currentUserValue.name) {
      this.router.navigate(['/']);
    }
  }

  // https://ultimatecourses.com/blog/query-params-angular-router
  // ngoninit 하면 새로고침해도 다시실행됨 - 새로고침하면 컴포넌트 다시 생성하는거여서 그런거임
  ngOnInit() {

    // if logined
    // if returnUrl redirect to that or return to / 

    // snapthot 하면 코드 실행되는 시점에서 가져와서 쓰는거임
    // 그냥 object로 바로줌.
    // 앵귤러가 같은 화면인데 url이 바뀌고 이런식이어서
    // 막 현재 url에 맞춰서 컴포넌트 상태가 바뀌는거아니면 걍 snapshot하면됨
    // 바뀌는거면 위의 방식으로 옵저버블 가져오면됨
    // this.queryParam = this.route.snapshot.queryParams;

    // 로그인 되면 백엔드에서 쿼리스트링으로 토큰 붙여서 redirect 해주니 쿼리 스트링에 토큰 있으면 로그인 처리하면됨.
    // 로그인 했으니 원래 가려고 했던 페이지로 이동시켜줌


    // this.listPost();
  }

  // listPost() {
  //   this.testService.getConfig()
  //     // clone the data object, using its known Config shape
  //     // https://rxjs.dev/deprecations/subscribe-arguments
  //     // next 가 머임??
  //     .subscribe({
  //       next: (v) => this.posts = v,
  //       error: (e) => this.errorMessage = e
  //     });
  // }

  // showConfigResponse() {
  //   this.testService.getConfigResponse()
  //     // resp is of type `HttpResponse<Config>`
  //     .subscribe(resp => {
  //       // display its headers
  //       const keys = resp.headers.keys();
  //       this.headers = keys.map(key =>
  //         `${key}: ${resp.headers.get(key)}`);
  
  //       // access the body directly, which is typed as `Config`.
  //       //  this.config = { ...resp.body! };
  //       this.config = resp.body!
  //     });
  // }

  // add(name: Post1): void {
  //   if (!name) { return; }
  //   this.testService.addHero(name as Post1)
  //     .subscribe();
  // }

  // delete(id: number): void {
  //   this.testService.deleteHero(id)
  //   .subscribe(console.log);
  // }

  // update(name: Post1): void {
  //   this.testService.updateHero(name)
  //   .subscribe({
  //     next: (v) => this.temp = v,
  //     error: (e) => this.errorMessage = e
  //   });
  // }

  // search() {
  //   this.testService.searchHeroes()
  //   .subscribe();
  // }

  // interCeptor() {
  //   this.testService.interCeptorTest()
  //   .subscribe({
  //     next: (v) => this.testt = v,
  //     error: (e) => this.errorMessage = e
  //   });
  // }
}