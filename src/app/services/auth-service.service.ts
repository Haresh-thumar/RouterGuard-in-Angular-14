import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  get isLoggedIn() {
    return false;
  }

  get isChildRouteActivate() {
    return false;
  }
}
