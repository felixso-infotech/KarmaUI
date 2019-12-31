import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GatewayAggregateQueryResourceService, GatewayAggregateCommandResourceService } from '../../api/services';
import { DateService } from '../date.service';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: any=null;
  private registeredUser: any=null;

  constructor(public gatewayAggregateQueryResource:GatewayAggregateQueryResourceService,
    public gatewayAggregateCommandResource:GatewayAggregateCommandResourceService,
    public dateService:DateService, public authService: AuthService) {

    console.log("Hello i am in constructor @@@@");
    this.configureUsers();
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
      console.log('configuring user');
      
      this.authService.getUserInfo().then(data=>{
        this.user=data;
        console.log("The user from the auth 2 server",this.user);
        this.gatewayAggregateQueryResource.getRegisteredUserByUserIdUsingGET(this.user.preferred_username)
        .subscribe(response => {
          this.registeredUser=response;
          console.log("registered user retrieved",this.registeredUser);
        }, error => {
          console.log('no user found in the server', error);
          if (error.status == 500) {
            this.gatewayAggregateCommandResource.createRegisteredUserUsingPOST({
              userId: this.user.preferred_username,
              email: this.user.email,
              firstName: this.user.given_name,
              createdDate: this.dateService.getCurrentTime()
            }).subscribe(response => {
              
              this.registeredUser= response;
              console.log('new registered user created', this.getRegisteredUser());
            }, err => console.log('error while creating the new registered user', err))
          }
        });

      }, error=>{
        console.log('error while retreving user from the keycloak',error);
      });
    }

}
