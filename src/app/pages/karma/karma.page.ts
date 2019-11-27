import { Component, OnInit, ViewChild } from '@angular/core';
import { GatewayAggregateCommandResourceService, GatewayAggregateQueryResourceService } from '../../api/services';
import { ActivityViewAggregate } from '../../api/models';
import { IonSlides, LoadingController } from '@ionic/angular';
import { ImageService } from '../../providers/image.service';
import { ActivityService } from '../../activity.service';
import { UserService } from '../../providers/user/user.service';

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

  loading: HTMLIonLoadingElement;
  isSelected: boolean;

  activityViewAggregates: ActivityViewAggregate[] = [];

  constructor(public gatewayAggregateQueryResource: GatewayAggregateQueryResourceService,
    public imageService: ImageService,
    public activityService: ActivityService,
    public loadingController: LoadingController,
    public userService: UserService) { }

  ngOnInit() {
    console.log('registered user',this.userService.registeredUser);
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
    this.presentLoading();
    this.suggestedActivitySlides.getActiveIndex()
      .then(index => {
        console.log("selected index and activity", index, this.activityViewAggregates[index]);
        this.activityService.currentActivity= this.activityViewAggregates[index];
      });
  }
  selectTrendingActivity() {
    console.log("selected trending activity");
    this.trendingActivitySlides.getActiveIndex()
      .then(index => {
        console.log("selected index and activity", index, this.activityViewAggregates[index]);
        this.activityService.currentActivity= this.activityViewAggregates[index];
      });
  }
  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: `<div class="full-screen-splash"><div class="spinner">
      <div class="cube1"></div>
      <div class="cube2"></div>
    </div></div>`,
      duration: 2000,
      spinner: null,
      cssClass: 'full-screen-splash spinner cube1 cube2',
      showBackdrop: false
    });
    await this.loading.present();
  }
}
