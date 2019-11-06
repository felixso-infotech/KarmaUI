/* tslint:disable */
import { DimensionDTO } from './dimension-dto';
export interface ActivityDTO {
  isMultipleProofsRequired?: boolean;
  challengeId?: number;
  description?: string;
  dimensions?: Array<DimensionDTO>;
  id?: number;
  createdDate?: string;
  noOfPages?: number;
  proofType?: 'IMAGE' | 'VIDEO' | 'TEXT' | 'PDF' | 'PPT' | 'DOC' | 'XLX';
  successMessage?: string;
  title?: string;
  type?: 'SINGLE' | 'TEAM';
}
