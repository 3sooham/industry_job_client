import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, /*map, tap, retry*/ } from 'rxjs/operators';

import { IndustryJob } from '../_models/industry-jobs';

@Injectable({
  providedIn: 'root'
})
export class IndustryJobService {
  industryJobsUrl = 'http://13.124.169.90:8001/api/v1/esi/industry/jobs';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getIndustryJobs
  }

  getIndustryJobs(): Observable<IndustryJob[]> {
    return this.http.get<IndustryJob[]>(this.industryJobsUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

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
}

// completed_character_id = serializers.IntegerField(required=False)
// completed_date = serializers.DateTimeField(required=False)
// cost = serializers.DecimalField(max_digits=13, decimal_places=4, required=False)
// licensed_runs = serializers.IntegerField(required=False)
// pause_date = serializers.DateTimeField(required=False)
// probability = serializers.FloatField(required=False)
// product_type_id = serializers.IntegerField(required=False)
// successful_runs = serializers.IntegerField(required=False)