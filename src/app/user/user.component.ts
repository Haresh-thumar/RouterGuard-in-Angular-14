import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: any;

  constructor(private jsonData: UsersService) { }

  ngOnInit(): void {
    this.jsonData.getPost().subscribe((data) => {
      this.users = data;
    })
  }

}
