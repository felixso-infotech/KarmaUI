/* tslint:disable */
import { Media } from './media';
export interface RegisteredUserDTO {
  noOfCoins?: number;
  email?: string;
  firstName?: string;
  id?: number;
  lastName?: string;
  noOfBronzeMedals?: number;
  encodedFile?: string;
  noOfGoldMedals?: number;
  noOfSilverMedals?: number;
  phoneNumber?: number;
  profilePic?: Media;
  profilePicId?: number;
}
