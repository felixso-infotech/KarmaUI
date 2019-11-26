/* tslint:disable */
export interface CommittedActivityStatusAggregate {
  activityId?: number;
  committedActivityId?: number;
  createdDate?: string;
  description?: string;
  proofFile?: string;
  proofFileContentType?: string;
  referenceId?: number;
  registeredUserId?: number;
  status?: 'TODO' | 'INPROGRESS' | 'DONE';
  userId?: string;
}
