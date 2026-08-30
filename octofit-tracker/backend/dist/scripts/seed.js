import mongoose from 'mongoose';
import { connectionString } from '../config/database.js';
import User from '../models/User.js';
import Team from '../models/Team.js';
import Activity from '../models/Activity.js';
import Leaderboard from '../models/Leaderboard.js';
import Workout from '../models/Workout.js';
/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
    try {
        console.log('Seed the octofit_db database with test data');
        await mongoose.connect(connectionString);
        await Promise.all([
            User.deleteMany({}),
            Team.deleteMany({}),
            Activity.deleteMany({}),
            Leaderboard.deleteMany({}),
            Workout.deleteMany({}),
        ]);
        const users = await User.insertMany([
            {
                name: 'Ava Martinez',
                email: 'ava.martinez@mergington.edu',
                grade: '10',
                team: 'Wave Riders',
                level: 5,
                totalPoints: 1280,
                streak: 12,
                goals: ['Run 5k', 'Increase mobility'],
                workouts: ['Cardio Circuit', 'Core Strength'],
            },
            {
                name: 'Leo Chen',
                email: 'leo.chen@mergington.edu',
                grade: '11',
                team: 'Wave Riders',
                level: 4,
                totalPoints: 1210,
                streak: 9,
                goals: ['Bench press 80kg', 'Improve speed'],
                workouts: ['Strength Builder', 'Sprint Ladder'],
            },
            {
                name: 'Maya Patel',
                email: 'maya.patel@mergington.edu',
                grade: '9',
                team: 'Summit Striders',
                level: 3,
                totalPoints: 1165,
                streak: 10,
                goals: ['Daily walks', 'Improve flexibility'],
                workouts: ['Mobility Flow', 'Hill Intervals'],
            },
        ]);
        const teams = await Team.insertMany([
            {
                name: 'Wave Riders',
                captain: 'Ava Martinez',
                members: ['Ava Martinez', 'Leo Chen'],
                score: 1840,
                focus: 'Cardio and team challenges',
            },
            {
                name: 'Summit Striders',
                captain: 'Maya Patel',
                members: ['Maya Patel', 'Ethan Brooks'],
                score: 1675,
                focus: 'Endurance and recovery',
            },
        ]);
        const activities = await Activity.insertMany([
            {
                user: 'Ava Martinez',
                type: 'Running',
                minutes: 35,
                points: 240,
                date: new Date('2026-08-24T17:30:00Z'),
            },
            {
                user: 'Leo Chen',
                type: 'Strength',
                minutes: 42,
                points: 260,
                date: new Date('2026-08-25T18:00:00Z'),
            },
            {
                user: 'Maya Patel',
                type: 'Walking',
                minutes: 28,
                points: 170,
                date: new Date('2026-08-26T16:15:00Z'),
            },
        ]);
        const leaderboard = await Leaderboard.insertMany([
            {
                user: 'Ava Martinez',
                team: 'Wave Riders',
                points: 1280,
                streak: 12,
                rank: 1,
            },
            {
                user: 'Leo Chen',
                team: 'Wave Riders',
                points: 1210,
                streak: 9,
                rank: 2,
            },
            {
                user: 'Maya Patel',
                team: 'Summit Striders',
                points: 1165,
                streak: 10,
                rank: 3,
            },
        ]);
        const workouts = await Workout.insertMany([
            {
                title: 'Cardio Circuit',
                focus: 'Endurance',
                level: 2,
                duration: 25,
                equipment: ['Jump rope', 'Cones'],
            },
            {
                title: 'Strength Builder',
                focus: 'Power',
                level: 3,
                duration: 30,
                equipment: ['Dumbbells', 'Bench'],
            },
            {
                title: 'Mobility Flow',
                focus: 'Recovery',
                level: 1,
                duration: 20,
                equipment: ['Yoga mat'],
            },
        ]);
        console.log('Connected to octofit_db');
        console.log('Inserted users:', users.length);
        console.log('Inserted teams:', teams.length);
        console.log('Inserted activities:', activities.length);
        console.log('Inserted leaderboard entries:', leaderboard.length);
        console.log('Inserted workouts:', workouts.length);
        console.log('Database seeding complete');
        await mongoose.disconnect();
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();
