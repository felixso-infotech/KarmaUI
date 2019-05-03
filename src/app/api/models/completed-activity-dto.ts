/* tslint:disable */
import { ActivityDTO } from './activity-dto';
import { RegisteredUserDTO } from './registered-user-dto';
export interface CompletedActivityDTO {
  activityDTO?: ActivityDTO;
  activityId?: number;
  encodedProofs?: Array<string>;
  id?: number;
  registeredUserDTO?: RegisteredUserDTO;
  registeredUserId?: number;
}
