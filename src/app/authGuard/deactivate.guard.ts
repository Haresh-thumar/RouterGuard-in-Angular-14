import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MerchantComponent } from '../merchant/merchant.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<MerchantComponent> {

  CanDeactivate() {
    return true;
  }

}
