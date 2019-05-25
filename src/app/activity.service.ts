import { ActivityModel } from './api/models/activity-model';
import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  currentActivity: ActivityModel;
  currentUser: User = {
    username: '',
    email: '',
    password: '',
    newUser: ''
  };
  
  constructor() { 

  }
}

