import { CurrentActivity } from './currentactivity';
import { ActivityModel } from './api/models/activity-model';
import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  currentActivity: ActivityModel;
  CurrentActivitySelected: CurrentActivity;
  currentActivityVideoUrl: string;

  currentUser: User = {
    username: '',
    email: '',
    password: '',
    newUser:false,
    id: 0
  };
  
  constructor() { 

  }
}

