import mongoose, { Schema, model } from 'mongoose';
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    grade: { type: String, default: '9' },
    team: { type: String, default: 'Unassigned' },
    level: { type: Number, default: 1 },
    totalPoints: { type: Number, default: 0 },
    streak: { type: Number, default: 0 },
    goals: [{ type: String }],
    workouts: [{ type: String }],
}, { timestamps: true });
export default mongoose.models.User || model('User', userSchema);
