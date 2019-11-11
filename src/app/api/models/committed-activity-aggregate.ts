/* tslint:disable */
import { DimensionDTO } from './dimension-dto';
export interface CommittedActivityAggregate {
  noOfComments?: number;
  activityCreatedDate?: string;
  activityId?: number;
  challengeId?: number;
  committedActivityDescription?: string;
  committedActivityId?: number;
  dimensions?: Array<DimensionDTO>;
  firstName?: string;
  imageString?: string;
  imageStringContentType?: string;
  lastName?: string;
  liked?: boolean;
  likedUserPhotos?: Array<string>;
  activityDescription?: string;
  noOfLoves?: number;
  noOfReferences?: number;
  profilePicture?: string;
  profilePictureContentType?: string;
  proofType?: 'IMAGE' | 'VIDEO' | 'TEXT' | 'PDF' | 'PPT' | 'DOC' | 'XLX';
  successMessage?: string;
  timeElapsed?: string;
  title?: string;
  type?: 'SINGLE' | 'TEAM';
  userId?: string;
  videoString?: string;
  videoStringContentType?: string;
}
