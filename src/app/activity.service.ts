import { InstructionVideoModel } from './api/models/instruction-video-model';
import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  currentActivity: InstructionVideoModel;
  currentUser: User={
    name:"",
    email: ""
  };
  
  constructor() { 

  }
}
