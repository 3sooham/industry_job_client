import { Injectable } from '@angular/core';
import { HttpClient/*, HttpHeaders*/ } from '@angular/common/http';
import { HttpErrorResponse /*, HttpResponse, HttpParams */} from '@angular/common/http';

// HttpClient가 모든 transaction에 observable을 사용함
import { /*Observable,*/ throwError } from 'rxjs';
import { catchError, /*map, tap, retry*/ } from 'rxjs/operators';

import { Config } from '../_models/config-interface';
// import { Post1 } from '../_models/post-interface';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  configUrl = 'http://13.124.169.90:8000/api/v1/blog/post_test';
  postUrl = 'http://13.124.169.90:8001/api/v1/blog/post';
  postUrl2 = 'http://13.124.169.90:8000/api/v1/blog/post/4';

  token ='Token bb4e568043a309bb0224b2fa3b891c03d8d26a62';

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Authorization': this.token })
  // };

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get<Config>(this.postUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  // getConfigResponse(): Observable<HttpResponse<Config>> {
  //   return this.http.get<Config>(
  //     this.configUrl, { observe: 'response' });
  // }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred 에러1:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  // addHero(post: Post1): Observable<Post1> {
  //   console.log(this.httpOptions);
  //   return this.http.post<Post1>(this.postUrl, post, this.httpOptions)
  //   .pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // /** DELETE: delete the hero from the server */
  // deleteHero(id: number): Observable<unknown> {
  //   const url = `${this.postUrl}/${id}`;

  //   return this.http.delete<Post1>(url, this.httpOptions)
  //   .pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // /** PUT: update the hero on the server */
  // updateHero(hero: Post1): Observable<Config> {
  //   return this.http.put<Config>(this.postUrl2, hero, this.httpOptions)
  //   .pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // /* GET heroes whose name contains search term */
  // searchHeroes() {
  //   let term = '나는쿼리스트링'
  //   const new_params = new HttpParams({fromString: 'name=foo'})

  //   // Add safe, URL encoded search parameter if there is a search term
  //   const options =
  //     { headers: new HttpHeaders({ 'Authorization': this.token }), params: new_params }

  //   return this.http.get(this.postUrl, options)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

  // interCeptorTest() {
  //   return this.http.get<Config>(this.postUrl)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }
  
}


// options: {
//   headers?: HttpHeaders | {[header: string]: string | string[]},
//   observe?: 'body' | 'events' | 'response',
//   params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
//   reportProgress?: boolean,
//   responseType?: 'arraybuffer'|'blob'|'json'|'text',
//   withCredentials?: boolean,
// }