/* tslint:disable */
export interface CommittedActivityDTO {
  activityId?: number;
  createdDate?: string;
  description?: string;
  id?: number;
  referenceId?: number;
  registeredUserId?: number;
  status?: 'TODO' | 'INPROGRESS' | 'DONE';
}
