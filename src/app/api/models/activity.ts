/* tslint:disable */
import { Media } from './media';
import { InstructionVideo } from './instruction-video';
export interface Activity {
  description?: string;
  files?: Array<Media>;
  id?: number;
  instructionVideo?: InstructionVideo;
  successMessage?: string;
  title?: string;
  url?: string;
}
