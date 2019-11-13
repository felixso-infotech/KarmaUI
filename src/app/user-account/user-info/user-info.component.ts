import { Component, OnInit } from '@angular/core';
import { GatewayAggregateQueryResourceService } from '../../api/services';
import { RegisteredUserAggregate } from '../../api/models';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {

  registeredUserAggregate:RegisteredUserAggregate={};

  constructor(public gatewayAggregateQueryResourceService:GatewayAggregateQueryResourceService) { }

  ngOnInit() {
    this.gatewayAggregateQueryResourceService.getRegisteredUserByUserIdUsingGET("Sharai").subscribe(
      (result)=>{
        this.registeredUserAggregate=result;
        console.log("***Fetched Registered User***",result);
      }
    );
  }

}
