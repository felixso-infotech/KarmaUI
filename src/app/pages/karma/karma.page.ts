import { Component, OnInit } from '@angular/core';
import { GatewayAggregateCommandResourceService, GatewayAggregateQueryResourceService } from '../../api/services';

@Component({
  selector: 'karma',
  templateUrl: './karma.page.html',
  styleUrls: ['./karma.page.scss']
})
export class KarmaPage implements OnInit {

  constructor(public gatewayAggregateQueryResource:GatewayAggregateQueryResourceService) { }

  ngOnInit() {

    //this.gatewayAggregateQueryResource.
  }

}
