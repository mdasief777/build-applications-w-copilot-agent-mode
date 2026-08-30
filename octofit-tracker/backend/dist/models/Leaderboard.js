import mongoose, { Schema, model } from 'mongoose';
const leaderboardSchema = new Schema({
    user: { type: String, required: true },
    team: { type: String, required: true },
    points: { type: Number, default: 0 },
    streak: { type: Number, default: 0 },
    rank: { type: Number, default: 1 },
}, { timestamps: true });
export default mongoose.models.Leaderboard || model('Leaderboard', leaderboardSchema);
