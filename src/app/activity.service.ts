import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  currentActivity:any;
  currentUser: User={
    name:"",
    email: ""
  };
  
  constructor() { 

  }
}
