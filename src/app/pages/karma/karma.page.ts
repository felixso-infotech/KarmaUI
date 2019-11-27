import { Component, OnInit, ViewChild } from '@angular/core';
import { GatewayAggregateCommandResourceService, GatewayAggregateQueryResourceService } from '../../api/services';
import { ActivityViewAggregate } from '../../api/models';
import { IonSlides } from '@ionic/angular';
import { ImageService } from '../../providers/image.service';

@Component({
  selector: 'karma',
  templateUrl: './karma.page.html',
  styleUrls: ['./karma.page.scss']
})
export class KarmaPage implements OnInit {

  @ViewChild('suggestedActivities', { static: false }) suggestedActivitySlides: IonSlides;
  @ViewChild('trendingActivities', { static: false }) trendingActivitySlides: IonSlides;

  slideOptions = {
    slidesPerView: 2,
    initialSlide: 1,
    speed: 300,
    spaceBetween: 0,
    loop: true,
    loopedSlides: 3,
    setWrapperSize: true
  };

  isSelected: boolean;

  activityViewAggregates: ActivityViewAggregate[] = [];

  constructor(public gatewayAggregateQueryResource: GatewayAggregateQueryResourceService, public imageService: ImageService) { }

  ngOnInit() {
    this.gatewayAggregateQueryResource.getAllActivitiesUsingGET({
      unpaged: false,
      sortUnsorted: false,
      sortSorted: true,
      /* sort: Array<string>,
      size: 2,
      paged: true,
      pageSize: 5,
      pageNumber: 2,
      page: 2,
      offset: 2
    */
    }).subscribe((result) => {
      this.activityViewAggregates = result;
      console.log("Activities...:", result);
    }, (error) => { console.log("Error..:", error) });
  }
  selectSuggestedActivity() {
    console.log("selected suggested activity");
     this.suggestedActivitySlides.getActiveIndex()
      .then(index=>{
        console.log("selected index and activity",index,this.activityViewAggregates[index]);
      });
  }
  selectTrendingActivity() {
    console.log("selected trending activity");
    this.trendingActivitySlides.getActiveIndex()
    .then(index=>{
      console.log("selected index and activity",index,this.activityViewAggregates[index]);
    });
  }
}
