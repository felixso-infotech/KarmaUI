/* tslint:disable */
import { Activity } from './activity';
import { CompletedActivity } from './completed-activity';
export interface Media {
  activity?: Activity;
  completedActivity?: CompletedActivity;
  file?: string;
  fileContentType?: string;
  fileName?: string;
  id?: number;
}
