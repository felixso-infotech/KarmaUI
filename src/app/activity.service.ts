import { Injectable } from '@angular/core';
import { ActivityViewAggregate } from './api/models';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  public currentActivity: ActivityViewAggregate=null;

  constructor() { }

}
