import { UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  // Fetch all users data from Api with retry & error catch handling with Rxjs Operator
  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url)
      .pipe(retry(3), catchError(this.handleError));
  }
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

}


class Post {
  constructor(
    public id: number,
    public name: string,
    public phone: number,
    public email: string,
    public city: string,
    public zipcode: number,
  ) { }
}
