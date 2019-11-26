import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: any=null;
  public registeredUser: any=null;

  constructor() {}

}
