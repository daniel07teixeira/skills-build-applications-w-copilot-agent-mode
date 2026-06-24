import { Schema, model, Types } from 'mongoose';

export interface IActivity {
  user: Types.ObjectId;
  type: string;
  durationMinutes: number;
  distanceKm?: number;
  points: number;
  notes?: string;
}

const activitySchema = new Schema<IActivity>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  distanceKm: Number,
  points: { type: Number, required: true },
  notes: String
}, { timestamps: true });

export default model<IActivity>('Activity', activitySchema);
