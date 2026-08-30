import { Router } from 'express';
import User from '../models/User.js';
import Team from '../models/Team.js';
import Activity from '../models/Activity.js';
import Leaderboard from '../models/Leaderboard.js';
import Workout from '../models/Workout.js';
const router = Router();
router.get('/health', (_req, res) => {
    res.json({ status: 'ok', message: 'OctoFit Tracker API is running' });
});
router.get('/users', async (_req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ message: 'Unable to load users' });
    }
});
router.post('/users', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    }
    catch (error) {
        res.status(400).json({ message: 'Unable to create user' });
    }
});
router.get('/teams', async (_req, res) => {
    try {
        const teams = await Team.find();
        res.json(teams);
    }
    catch (error) {
        res.status(500).json({ message: 'Unable to load teams' });
    }
});
router.post('/teams', async (req, res) => {
    try {
        const team = await Team.create(req.body);
        res.status(201).json(team);
    }
    catch (error) {
        res.status(400).json({ message: 'Unable to create team' });
    }
});
router.get('/activities', async (_req, res) => {
    try {
        const activities = await Activity.find().sort({ date: -1 });
        res.json(activities);
    }
    catch (error) {
        res.status(500).json({ message: 'Unable to load activities' });
    }
});
router.post('/activities', async (req, res) => {
    try {
        const activity = await Activity.create(req.body);
        res.status(201).json(activity);
    }
    catch (error) {
        res.status(400).json({ message: 'Unable to create activity' });
    }
});
router.get('/leaderboard', async (_req, res) => {
    try {
        const leaderboard = await Leaderboard.find().sort({ points: -1, streak: -1 });
        res.json(leaderboard);
    }
    catch (error) {
        res.status(500).json({ message: 'Unable to load leaderboard' });
    }
});
router.post('/leaderboard', async (req, res) => {
    try {
        const entry = await Leaderboard.create(req.body);
        res.status(201).json(entry);
    }
    catch (error) {
        res.status(400).json({ message: 'Unable to create leaderboard entry' });
    }
});
router.get('/workouts', async (_req, res) => {
    try {
        const workouts = await Workout.find();
        res.json(workouts);
    }
    catch (error) {
        res.status(500).json({ message: 'Unable to load workouts' });
    }
});
router.post('/workouts', async (req, res) => {
    try {
        const workout = await Workout.create(req.body);
        res.status(201).json(workout);
    }
    catch (error) {
        res.status(400).json({ message: 'Unable to create workout' });
    }
});
export default router;
