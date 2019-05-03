/* tslint:disable */
import { Media } from './media';
import { InstructionVideo } from './instruction-video';
export interface ActivityDTO {
  description?: string;
  encodedFiles?: Array<string>;
  encodedInstructionVideo?: string;
  files?: Array<Media>;
  id?: number;
  instructionVideo?: InstructionVideo;
  instructionVideoId?: number;
  successMessage?: string;
  title?: string;
  url?: string;
}
