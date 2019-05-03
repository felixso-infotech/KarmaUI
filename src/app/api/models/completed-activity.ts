/* tslint:disable */
import { Activity } from './activity';
import { Media } from './media';
import { RegisteredUser } from './registered-user';
export interface CompletedActivity {
  activity?: Activity;
  id?: number;
  proofs?: Array<Media>;
  registeredUser?: RegisteredUser;
}
