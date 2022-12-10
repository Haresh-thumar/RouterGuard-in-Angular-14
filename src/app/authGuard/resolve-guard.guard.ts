import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuardGuard implements Resolve<any> {

  constructor(private usersService: UsersService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
     return this.usersService.getUsers();
  }

}
