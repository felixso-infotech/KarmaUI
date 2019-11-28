/* tslint:disable */
export interface CommittedActivityProfileAggregate {
  noOfLoves?: number;
  activityId?: number;
  activityImageString?: string;
  activityTitle?: string;
  committedActivityCreatedDate?: string;
  committedActivityId?: number;
  activityImageContentType?: string;
  proofImageContentType?: string;
  proofImageString?: string;
  status?: 'TODO' | 'INPROGRESS' | 'DONE';
  timeElapsed?: string;
  type?: 'SINGLE' | 'TEAM';
}
