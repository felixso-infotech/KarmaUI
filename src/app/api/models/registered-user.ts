/* tslint:disable */
import { CompletedActivity } from './completed-activity';
import { Media } from './media';

/**
 * RegisteredUser entity. @author Muhammed Ruhail
 */
export interface RegisteredUser {
  noOfBronzeMedals?: number;
  completedActivities?: Array<CompletedActivity>;
  firstName?: string;
  id?: number;
  lastName?: string;
  email?: string;
  noOfCoins?: number;
  noOfGoldMedals?: number;
  noOfSilverMedals?: number;
  phoneNumber?: number;
  profilePic?: Media;
}
