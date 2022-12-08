import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CanComponentLeave } from '../authGuard/deactivate.guard';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.scss']
})
export class MerchantComponent implements CanComponentLeave, OnInit {

  userName = new FormControl('');

  ngOnInit(): void {
  }

  canLeave(): boolean {
    if (this.userName.dirty) {
      return window.confirm("You have some changes. Save it before leaving...");
    }
    return true;
  }

}
