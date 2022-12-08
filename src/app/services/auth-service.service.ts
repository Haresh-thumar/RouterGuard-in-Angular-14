import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  get isLoggedIn() {
    return true;
  }

  get isChildRouteActivate() {
    return false;
  }
}
