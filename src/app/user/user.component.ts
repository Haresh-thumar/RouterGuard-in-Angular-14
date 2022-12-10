import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: any;
  ActivatedRoute: any;

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.users = this.activateRoute.snapshot.data['data'];
  }

}
