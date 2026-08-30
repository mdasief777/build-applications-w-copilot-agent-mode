import mongoose, { Schema, model } from 'mongoose';
const activitySchema = new Schema({
    user: { type: String, required: true },
    type: { type: String, required: true },
    minutes: { type: Number, required: true },
    points: { type: Number, default: 0 },
    date: { type: Date, default: Date.now },
}, { timestamps: true });
export default mongoose.models.Activity || model('Activity', activitySchema);
