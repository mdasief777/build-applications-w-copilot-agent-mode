import mongoose, { Schema, model } from 'mongoose';
const teamSchema = new Schema({
    name: { type: String, required: true, unique: true },
    captain: { type: String, required: true },
    members: [{ type: String }],
    score: { type: Number, default: 0 },
    focus: { type: String, default: 'Wellness and endurance' },
}, { timestamps: true });
export default mongoose.models.Team || model('Team', teamSchema);
