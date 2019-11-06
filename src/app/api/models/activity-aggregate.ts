/* tslint:disable */
import { ActivityDTO } from './activity-dto';
import { IntroductionStoryDTO } from './introduction-story-dto';
export interface ActivityAggregate {
  activityDTO?: ActivityDTO;
  id?: number;
  introductionStories?: Array<IntroductionStoryDTO>;
}
