/* tslint:disable */
import { DimensionDTO } from './dimension-dto';
export interface CommittedActivityAggregate {
  noOfLoves?: number;
  activityDescription?: string;
  challengeId?: number;
  committedActivityCreatedDate?: string;
  committedActivityDescription?: string;
  committedActivityId?: number;
  dimensions?: Array<DimensionDTO>;
  firstName?: string;
  imageString?: string;
  imageStringContentType?: string;
  lastName?: string;
  liked?: boolean;
  noOfComments?: number;
  activityId?: number;
  noOfReferences?: number;
  profilePicture?: string;
  profilePictureContentType?: string;
  proofType?: 'IMAGE' | 'VIDEO' | 'TEXT' | 'PDF' | 'PPT' | 'DOC' | 'XLX';
  status?: 'TODO' | 'INPROGRESS' | 'DONE';
  successMessage?: string;
  timeElapsed?: string;
  title?: string;
  type?: 'SINGLE' | 'TEAM';
  userId?: string;
  videoString?: string;
  videoStringContentType?: string;
}
