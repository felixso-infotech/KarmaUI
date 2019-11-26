/* tslint:disable */
export interface CommittedActivityProfileAggregate {
  noOfLoves?: number;
  activityCreatedDate?: string;
  activityImageContentType?: string;
  activityImageString?: string;
  activityTitle?: string;
  committedActivityId?: number;
  activityId?: number;
  proofImageContentType?: string;
  proofImageString?: string;
  status?: 'TODO' | 'INPROGRESS' | 'DONE';
  timeElapsed?: string;
  type?: 'SINGLE' | 'TEAM';
}
