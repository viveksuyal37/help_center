import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { globalErrorMiddleware } from './middlewares/globalAppError';
import prisma from './prismaClient';
import helpCenterRoutes from './routes/card';

dotenv.config();

const PORT = process.env.APP_PORT || 3003;

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'server is healthy' });
});

app.use('/api/help-center', helpCenterRoutes);

app.use(globalErrorMiddleware);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

process.on('SIGINT', async () => {
  console.log('Shutting down gracefully...');
  await prisma.$disconnect();
  process.exit(0);
});
