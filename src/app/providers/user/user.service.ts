import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GatewayAggregateQueryResourceService, GatewayAggregateCommandResourceService } from '../../api/services';
import { DateService } from '../date.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: any=null;
  private registeredUser: any=null;

  constructor(public gatewayAggregateQueryResource:GatewayAggregateQueryResourceService,
    public gatewayAggregateCommandResource:GatewayAggregateCommandResourceService,
    public dateService:DateService) {

    console.log("Hello i am in constructor @@@@")
  }

  public setUser(val:any) :void {
    this.user=val;
  }
  public getUser():any{
    return this.user;
  }

  public setRegisteredUser(val:any) : void {
    this.registeredUser=val;
  }
  public getRegisteredUser():any{
    return this.registeredUser;
  }

  configureUsers(){
    console.log('user in home', this.getUser());
    if (this.getUser()) {
      console.log('valid user present');
      this.gatewayAggregateQueryResource.getRegisteredUserByUserIdUsingGET(this.getUser().preferred_username)
        .subscribe(response => {
          this.setRegisteredUser(response);
          console.log("ConfigureUsers;;;;",this.registeredUser.id)
          //this.regId=this.userService.getRegisteredUser().id;//to get reg user id
         // this.userId=this.userService.getRegisteredUser().userId;
          console.log(this.getRegisteredUser());
        }, error => {
          console.log('no user found in the server', error);
          if (error.status == 500) {
            this.gatewayAggregateCommandResource.createRegisteredUserUsingPOST({
              userId: this.getUser().preferred_username,
              email: this.getUser().email,
              firstName: this.getUser().given_name,
              createdDate: this.dateService.getCurrentTime()
            }).subscribe(response => {
              
              this.setRegisteredUser(response);
              //this.regId=this.getRegisteredUser().id;//to get reg user id
              //this.userId=this.getRegisteredUser().userId;
              console.log('user created', this.getRegisteredUser());
            }, err => console.log('error while creating the user', err))
          }
        });
    }
  }

}
