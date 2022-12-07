import { Injectable, Component } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MerchantComponent } from './../merchant/merchant.component';

// this use for globallly reuseable component (this is right way)
export interface CanComponentLeave {
  canLeave: () => boolean;
}

@Injectable({
  providedIn: 'root'
})

export class DeactivateGuard implements CanDeactivate<CanComponentLeave> {

  canDeactivate(Component: CanComponentLeave) {
    if (Component.canLeave) {
      return Component.canLeave();
    }
    return true;
  }

}
