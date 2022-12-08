import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: any = [];

  constructor(private usersData: UsersService) { }

  ngOnInit(): void {
    this.users = this.usersData.getAllUsers();
  }

}
