import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import apiRoutes from './routes/api.js';
import { getApiBaseUrl } from './config/api.js';
dotenv.config();
const app = express();
const port = Number(process.env.PORT) || 8000;
app.use(cors());
app.use(express.json());
app.get('/api/health', async (_req, res) => {
    try {
        await connectDB();
        res.json({ status: 'ok', message: 'OctoFit Tracker backend is running' });
    }
    catch (error) {
        res.status(500).json({ status: 'error', message: 'Database connection failed' });
    }
});
app.use('/api', apiRoutes);
async function startServer() {
    await connectDB();
    app.listen(port, () => {
        console.log(`OctoFit Tracker API running on http://localhost:${port}`);
        console.log(`API base URL: ${getApiBaseUrl()}`);
    });
}
startServer().catch((error) => {
    console.error('Failed to start server:', error);
    process.exit(1);
});
