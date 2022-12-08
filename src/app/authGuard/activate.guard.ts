import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {

  constructor(private authService: AuthServiceService) { }

  canActivate() {
    if (this.authService.isLoggedIn) {
      return true;
    }
    else {
      alert("Permission denied for this page...");
      return false;
    }
  }

}
