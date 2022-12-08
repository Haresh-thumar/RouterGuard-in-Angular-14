import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateChildGuard implements CanActivateChild {

  constructor(private childRouteActive: AuthServiceService) { }

  canActivateChild() {
    if (this.childRouteActive.isChildRouteActivate) {
      return true;
    }
    else {
      alert("Your Can't have Permission for this child component access...");
      return false;
    }
  }

}
