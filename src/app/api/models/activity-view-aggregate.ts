/* tslint:disable */
import { ActivityImageAggregate } from './activity-image-aggregate';
export interface ActivityViewAggregate {
  activityId?: number;
  challengeId?: number;
  challengeName?: string;
  createdDate?: string;
  imageString?: string;
  imageStringContentType?: string;
  introductionStories?: Array<ActivityImageAggregate>;
  title?: string;
  type?: 'SINGLE' | 'TEAM';
}
