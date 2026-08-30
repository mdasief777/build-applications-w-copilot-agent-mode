import mongoose from 'mongoose';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

export default async function connectDB() {
  mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

  await mongoose.connect(connectionString);
  console.log('Connected to octofit_db');
  return mongoose.connection;
}
