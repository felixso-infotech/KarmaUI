import { RegisteredUserModel } from './../api/models/registered-user-model';
import { Component, OnInit } from '@angular/core';
import { AggregateQueryResourceService } from '../api/services';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  users: RegisteredUserModel[];
  constructor(private quryResource: AggregateQueryResourceService) { }

  ngOnInit() {
    this.quryResource.getAllRegisteredUsersUsingGET({}).subscribe(model=>{
        this.users=model;
        console.log("users",this.users);
    },
    error=>{
      console.log("something went wrong when retrieving users",error);
    })
  }

}
