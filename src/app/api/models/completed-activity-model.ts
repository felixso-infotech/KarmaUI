/* tslint:disable */
import { MediaDTO } from './media-dto';
export interface CompletedActivityModel {
  activityDescription?: string;
  activityId?: number;
  activityTitle?: string;
  id?: number;
  proofs?: Array<MediaDTO>;
  registeredUserId?: number;
}
