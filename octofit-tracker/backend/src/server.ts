import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from './config/database.js';
import apiRoutes from './routes/api.js';

dotenv.config();

const codespaceName = process.env.CODESPACE_NAME;

const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

export const getApiBaseUrl = () =>
  codespaceName ? `https://${codespaceName}-8000.app.github.dev` : 'http://localhost:8000';

export const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', async (_req, res) => {
  try {
    await connectDB();
    res.json({ status: 'ok', message: 'OctoFit Tracker backend is running' });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Database connection failed' });
  }
});

app.use('/api', apiRoutes);

export async function startServer() {
  const port = Number(process.env.PORT) || 8000;

  await connectDB();

  app.listen(port, () => {
    console.log(`OctoFit Tracker API running on http://localhost:${port}`);
    console.log(`API base URL: ${apiBaseUrl}`);
  });
}

export default apiBaseUrl;