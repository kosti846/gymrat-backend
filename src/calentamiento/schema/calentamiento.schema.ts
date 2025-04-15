import { Schema } from 'mongoose';

export const RoutineSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  durationSeconds: {
    type: Number,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  repetitions: {
    type: Number,
    required: false,
  },
  sets: {
    type: [String],
    required: true,
  },
  restSeconds: {
    type: Number,
    required: false,
  },
  notes: {
    type: String,
    required: false,
  },
});
