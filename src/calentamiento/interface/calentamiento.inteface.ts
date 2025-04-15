import { Document } from 'mongoose';

export interface CalentamientoDTO extends Document {
  readonly name: string;
  readonly durationSeconds?: number;
  readonly description: string;
  readonly repetitions?: number;
  readonly sets: string[];
  readonly restSeconds?: number;
  readonly notes?: string;
}
