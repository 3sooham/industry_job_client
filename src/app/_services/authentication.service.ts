import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { BehaviorSubject /*, Observable */ } from 'rxjs';

import { User } from '../_models/user';

@Injectable({
     providedIn: 'root' 
})
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    // BehaviorSubject가 옵저버블이어서 이거 없이 그 자체를 구독하면 될것도 같으니 아래 없애고 직접 구독하는거 한 번 해봐야함
    // public currentUser: Observable<User>;

    private _returnUrl: any;
    private token: string;
    private name: string;
    private user: User;

    constructor() {
        // BehaviorSubject는 값을 들고 있다가 누가 구독하면 emit해줌.
        // A variant of Subject that requires an initial value and emits its current value whenever it is subscribed to.
        // 로컬 스토리지에서 현재 토큰 가져와서 로그인상태인지 확인함.
        this.user = {'name': localStorage.getItem('name'), 'token': localStorage.getItem('token')}
        this.currentUserSubject = new BehaviorSubject<User>(this.user);
        // this.currentUser = this.currentUserSubject.asObservable();
    }

    // 이 getter로 다른 컴포넌트가 토큰 가져감.
    public get currentUserValue(): User {
        // value가 BehaviorSubject의  get value: T임
        // https://rxjs.dev/api/index/class/BehaviorSubject#value
        return this.currentUserSubject.value;
    }

    get currentUser(): BehaviorSubject<User>{
        return this.currentUserSubject;
    }

    get returnUrl(): any{
        this._returnUrl = localStorage.getItem('returnUrl');

        return this._returnUrl;
    }

    set returnUrl(url: any){
        this._returnUrl = localStorage.setItem('returnUrl', url)
    }

    removeReturnUrl(){
        localStorage.removeItem('returnUrl')
    }

    // 쿼리스트링 받은거에서 토큰이랑 이름 추출해서 로컬 스토리지에 넣어준 후에 둘 다를 묶어서 currentUserSubject에 넣어줌.
    login(queryString: Params){ 
        this.token = queryString['token']
        this.name = queryString['name']
        localStorage.setItem('token', this.token);
        localStorage.setItem('name', this.name);

        this.currentUserSubject.next({'name' : this.name, 'token': this.token})
    }

    // logout() {
    //     localStorage.removeItem('token');
    //     localStorage.removeItem('name');
    //     this.currentUserSubject.next(null as any);
    // }
}