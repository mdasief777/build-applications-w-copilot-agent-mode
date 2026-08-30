import mongoose, { Schema, model } from 'mongoose';

const workoutSchema = new Schema(
  {
    title: { type: String, required: true },
    focus: { type: String, required: true },
    level: { type: Number, default: 1 },
    duration: { type: Number, required: true },
    equipment: [{ type: String }],
  },
  { timestamps: true },
);

export default mongoose.models.Workout || model('Workout', workoutSchema);
