import { Schema, model } from 'mongoose';

export interface IUser {
  name: string;
  email: string;
  grade: string;
  team: string;
  points: number;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  grade: { type: String, required: true },
  team: { type: String, required: true },
  points: { type: Number, default: 0 }
}, { timestamps: true });

export default model<IUser>('User', userSchema);
